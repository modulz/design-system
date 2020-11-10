import React from 'react';
import { styled, css } from '../stitches.config';
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

export type { DialogContentProps, DialogCloseProps } from '@interop-ui/react-dialog';
export type DialogProps = DialogPrimitiveProps & {
  children: React.ReactNode;
};

const fadeIn = css.keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const moveDown = css.keyframes({
  '0%': { transform: 'translate(-50%, calc(-50% + 2px))' },
  '100%': { transform: 'translate(-50%, -50%)' },
});

const StyledOverlay = styled(Overlay, {
  ...styles.overlay,
  animation: `${fadeIn} 125ms ease-out`,
});

export function Dialog({ children, ...props }: DialogProps) {
  return (
    <DialogPrimitive {...props}>
      <DialogPrimitive.Overlay as={StyledOverlay} />
      {children}
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
  animation: `${fadeIn} 125ms ease-out, ${moveDown} 125ms cubic-bezier(0.25, 1, 0.5, 1)`,

  '&:focus': {
    outline: 'none',
  },
});

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <DialogPrimitive.Content {...props} ref={forwardedRef} as={StyledContent}>
      {children}
      <Dialog.Close
        as={IconButton}
        variant="ghost"
        css={{ position: 'absolute', top: '$2', right: '$2' }}
      >
        <Cross2Icon />
      </Dialog.Close>
    </DialogPrimitive.Content>
  )
);

Dialog.Trigger = DialogPrimitive.Trigger;
Dialog.Content = DialogContent;
Dialog.Close = DialogPrimitive.Close;
