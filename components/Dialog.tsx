import * as React from 'react';
import { Dialog, styles } from '@interop-ui/react-dialog';
import { Button } from '../components/Button';

export const Basic = () => (
  <Dialog>
    <Dialog.Trigger as={Button}>Open</Dialog.Trigger>
    <Dialog.Overlay style={{
      ...styles.overlay,
      backgroundColor: 'rgba(0,0,0,.15)'
      }}
    />
    <Dialog.Content style={{
      ...styles.content,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'white',
      minWidth: 200,
      maxWidth: 'fit-content',
      maxHeight: '85vh',
      padding: 35,
      borderRadius: 5,
      backgroundColor: 'white',
      boxShadow: 'rgba(14, 18, 22, 0.35) 0px 10px 38px -10px, rgba(14, 18, 22, 0.2) 0px 10px 20px -15px',
      marginTop: '-5vh',
    }}>
      <Dialog.Close as={Button}>Close</Dialog.Close>
    </Dialog.Content>
  </Dialog>
);
