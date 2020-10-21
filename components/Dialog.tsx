import {
  Dialog as DialogPrimitive,
  DialogContentProps,
  DialogProps as DialogPrimitiveProps,
  DialogTriggerProps,
  styles,
} from '@interop-ui/react-dialog';
import { Overlay } from './Overlay';
import { Panel } from './Panel';

export function DialogButton(props: DialogTriggerProps) {
  return <DialogPrimitive.Trigger {...props} />;
}

export function DialogContent(props: DialogContentProps) {
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
    />
  );
}

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
