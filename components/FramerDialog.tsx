import React from 'react';
import { styled } from '../stitches.config';
import {
  Dialog as DialogPrimitive,
  DialogContentProps,
  DialogProps as DialogPrimitiveProps,
  styles,
} from '@interop-ui/react-dialog';
import { Cross2Icon } from '@modulz/radix-icons';
import { Overlay } from './Overlay';
import { Panel } from './Panel';
import { IconButton } from './IconButton';
import { motion, AnimatePresence } from 'framer-motion';

export type { DialogContentProps, DialogCloseProps } from '@interop-ui/react-dialog';
export type DialogProps = DialogPrimitiveProps & {
  children: React.ReactNode;
};

const Context = React.createContext<{
  isMounted?: boolean;
  onExitComplete(): void;
}>({} as any);

const StyledOverlay = styled(Overlay, {
  ...styles.overlay,
});

export function Dialog({
  defaultIsOpen,
  isOpen: isOpenProp,
  onIsOpenChange = () => {},
  children,
  ...props
}: DialogProps) {
  const [isMounted = isOpenProp, setIsMounted] = React.useState(defaultIsOpen);
  const [isOpen, setIsOpen] = React.useState(defaultIsOpen);
  const isControlled = isOpenProp !== undefined;

  React.useEffect(() => {
    if (isMounted) setIsOpen(true);
  }, [isMounted]);

  return (
    <DialogPrimitive
      {...props}
      isOpen={isOpen}
      onIsOpenChange={(isOpen) => {
        if (!isControlled) setIsMounted(isOpen);
        onIsOpenChange(isOpen);
      }}
    >
      <DialogPrimitive.Overlay as={StyledOverlay} />

      <Context.Provider value={{ isMounted, onExitComplete: () => setIsOpen(false) }}>
        {children}
      </Context.Provider>
    </DialogPrimitive>
  );
}

const StyledContent = styled(Panel, {
  ...styles.content,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxWidth: 'fit-content',
  maxHeight: '85vh',
  padding: '$4',
  marginTop: '-5vh',

  '&:focus': {
    outline: 'none',
  },
});

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, ...props }, forwardedRef) => {
    const context = React.useContext(Context);
    return (
      <AnimatePresence onExitComplete={context.onExitComplete}>
        {context.isMounted && (
          <DialogPrimitive.Content
            {...props}
            ref={forwardedRef}
            as={motion.div}
            initial={{
              backgroundColor: 'white',
              padding: '20px',
              x: '-50%',
              y: '-50%',
              top: '50%',
              left: '50%',
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
              minWidth: 200,
              maxWidth: 'fit-content',
              maxHeight: '85vh',
              scale: 2,
            }}
            animate={{ scale: 1 }}
            exit={{ opacity: 0, scale: 2 }}
          >
            {children}
            <Dialog.Close
              as={IconButton}
              variant="ghost"
              css={{ position: 'absolute', top: '$2', right: '$2' }}
            >
              <Cross2Icon />
            </Dialog.Close>
          </DialogPrimitive.Content>
        )}
      </AnimatePresence>
    );
  }
);

Dialog.Trigger = DialogPrimitive.Trigger;
Dialog.Content = DialogContent;
Dialog.Close = DialogPrimitive.Close;
