import React from 'react';
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

export function AlertDialog({ children, ...props }: AlertDialogProps) {
  return (
    <AlertDialogPrimitive {...props}>
      <AlertDialogPrimitive.Overlay as={Overlay} css={styles.overlay} />
      {children}
    </AlertDialogPrimitive>
  );
}

function AlertDialogContent({ children, ...props }: AlertDialogContentProps) {
  return (
    <AlertDialogPrimitive.Content
      {...props}
      as={Panel}
      css={{
        ...styles.content,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: 200,
        maxWidth: 'fit-content',
        maxHeight: '85vh',
        padding: '$4',
        marginTop: '-5vh',
      }}
    >
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
