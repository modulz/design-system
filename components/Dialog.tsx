import React from 'react';
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

export function Dialog({ children, ...props }: DialogProps) {
  return (
    <DialogPrimitive {...props}>
      <DialogPrimitive.Overlay as={Overlay} css={styles.overlay} />
      {children}
    </DialogPrimitive>
  );
}

function DialogContent({ children, ...props }: DialogContentProps) {
  return (
    <DialogPrimitive.Content
      as={Panel}
      {...props}
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
      <Dialog.Close
        as={IconButton}
        variant="ghost"
        css={{ position: 'absolute', top: '$2', right: '$2' }}
      >
        <Cross2Icon />
      </Dialog.Close>
    </DialogPrimitive.Content>
  );
}

Dialog.Trigger = DialogPrimitive.Trigger;
Dialog.Content = DialogContent;
Dialog.Close = DialogPrimitive.Close;
