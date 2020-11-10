import React from 'react';
import { styled, css } from '../stitches.config';
import {
  AlertDialog as AlertDialogPrimitive,
  AlertDialogContentProps,
  AlertDialogProps as AlertDialogPrimitiveProps,
  styles,
} from '@interop-ui/react-alert-dialog';
import { Overlay } from './Overlay';
import { Panel } from './Panel';

export type {
  AlertDialogContentProps,
  AlertDialogTitleProps,
  AlertDialogDescriptionProps,
  AlertDialogActionProps,
  AlertDialogCancelProps,
} from '@interop-ui/react-alert-dialog';
export type AlertDialogProps = AlertDialogPrimitiveProps & {
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

export function AlertDialog({ children, ...props }: AlertDialogProps) {
  return (
    <AlertDialogPrimitive {...props}>
      <AlertDialogPrimitive.Overlay as={StyledOverlay} />
      {children}
    </AlertDialogPrimitive>
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

function AlertDialogContent({ children, ...props }: AlertDialogContentProps) {
  return (
    <AlertDialogPrimitive.Content {...props} as={StyledContent}>
      {children}
    </AlertDialogPrimitive.Content>
  );
}
AlertDialog.Trigger = AlertDialogPrimitive.Trigger;
AlertDialog.Content = AlertDialogContent;
AlertDialog.Title = AlertDialogPrimitive.Title;
AlertDialog.Description = AlertDialogPrimitive.Description;
AlertDialog.Action = AlertDialogPrimitive.Action;
AlertDialog.Cancel = AlertDialogPrimitive.Cancel;
