import React from 'react';
import { styled, css, StitchesProps } from '../stitches.config';
import * as AlertDialogPrimitive from '@interop-ui/react-alert-dialog';
import { Overlay } from './Overlay';
import { Panel } from './Panel';

export type AlertDialogTitleProps = React.ComponentProps<typeof AlertDialogPrimitive.Title>;
export type AlertDialogDescriptionProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Description
>;
export type AlertDialogActionProps = React.ComponentProps<typeof AlertDialogPrimitive.Action>;
export type AlertDialogCancelProps = React.ComponentProps<typeof AlertDialogPrimitive.Cancel>;

export type AlertDialogProps = {
  children: React.ReactNode;
};
export type AlertDialogContentProps = StitchesProps<typeof StyledContent>;

const fadeIn = css.keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const moveDown = css.keyframes({
  '0%': { transform: 'translate(-50%, calc(-50% + 2px))' },
  '100%': { transform: 'translate(-50%, -50%)' },
});

const StyledOverlay = styled(Overlay, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  animation: `${fadeIn} 125ms ease-out`,
});

export function AlertDialog({ children, ...props }: AlertDialogProps) {
  return (
    <AlertDialogPrimitive.Root {...props}>
      <AlertDialogPrimitive.Overlay as={StyledOverlay} />
      {children}
    </AlertDialogPrimitive.Root>
  );
}

const StyledContent = styled(AlertDialogPrimitive.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxWidth: 'fit-content',
  maxHeight: '85vh',
  padding: '$4',
  marginTop: '-5vh',
  animation: `${fadeIn} 125ms ease-out, ${moveDown} 125ms cubic-bezier(0.22, 1, 0.36, 1)`,

  '&:focus': {
    outline: 'none',
  },
});

function AlertDialogContent({ children, ...props }: AlertDialogContentProps) {
  return (
    <StyledContent {...props} as={Panel}>
      {children}
    </StyledContent>
  );
}
AlertDialog.Trigger = AlertDialogPrimitive.Trigger;
AlertDialog.Content = AlertDialogContent;
AlertDialog.Title = AlertDialogPrimitive.Title;
AlertDialog.Description = AlertDialogPrimitive.Description;
AlertDialog.Action = AlertDialogPrimitive.Action;
AlertDialog.Cancel = AlertDialogPrimitive.Cancel;
