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
  '0%': { transform: 'translate(-50%, calc(-50% - 10px))' },
  '100%': { transform: 'translate(-50%, -50%)' },
});

const StyledOverlay = styled(Overlay, {
  ...styles.overlay,
  animation: `${fadeIn} 333ms ease-out`,
});

export function Dialog({ children, ...props }: DialogProps) {
  return (
    <DialogPrimitive {...props}>
      <DialogPrimitive.Overlay as={StyledOverlay} />
      {children}
    </DialogPrimitive>
  );
}

const StyledContent = styled(DialogPrimitive.Content, {
  ...styles.content,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxWidth: 'fit-content',
  maxHeight: '85vh',
  padding: '$4',
  marginTop: '-5vh',
  animation: `${fadeIn} 333ms ease-out, ${moveDown} 133ms ease-out`,

  '&:focus': {
    outline: 'none',
  },
});

const StyledCloseButton = styled(DialogPrimitive.Close, {
  ...styles.close,
  position: 'absolute',
  top: '$2',
  right: '$2',
});

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef} as={Panel}>
      {children}
      <StyledCloseButton as={IconButton} variant="ghost">
        <Cross2Icon />
      </StyledCloseButton>
    </StyledContent>
  )
);

Dialog.Trigger = DialogPrimitive.Trigger;
Dialog.Content = DialogContent;
Dialog.Close = DialogPrimitive.Close;
