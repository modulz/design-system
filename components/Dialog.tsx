import {
  Dialog as DialogPrimitive,
  DialogContentProps,
  DialogProps as DialogPrimitiveProps,
  styles,
} from '@interop-ui/react-dialog';
import { Overlay } from './Overlay';
import { Panel } from './Panel';
import { Button } from './Button';

export type DialogProps = DialogPrimitiveProps & {
  children: React.ReactNode;
};

export function Dialog({ children }: DialogProps) {
  return (
    <DialogPrimitive>
      <DialogPrimitive.Overlay as={Overlay} css={styles.overlay} />
      {children}
    </DialogPrimitive>
  );
}

Dialog.Trigger = DialogPrimitive.Trigger;

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
        padding: 20,
        marginTop: '-5vh',
      }}
    >
      {children}
      <Dialog.Close as={Button} css={{ position: 'absolute', top: '$2', right: '$2' }}>
        X
      </Dialog.Close>
    </DialogPrimitive.Content>
  );
}

Dialog.Content = DialogContent;
Dialog.Close = DialogPrimitive.Close;
