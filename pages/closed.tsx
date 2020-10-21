import React from 'react';
import { Box } from '../components/Box';
import { Avatar } from '../components/Avatar';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { Flex } from '../components/Flex';
import { Dialog } from '../components/Dialog';

export default function Closed() {
  return (
    <Box
      css={{
        minHeight: '100vh',
        backgroundColor: '$loContrast',
        padding: '10vw',
      }}
    >
      <Text size="5" css={{ mt: '$7', mb: '$4' }}>
        Avatar
      </Text>

      <Avatar
        css={{ marginBottom: '30px' }}
        alt="Colm Tuite"
        src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
        fallback="C"
      />

      <Flex css={{ gap: '$4' }}>
        {[1, 2, 3, 4, 5].map((size) => (
          <Avatar
            size={size as any}
            shape="square"
            alt="Colm Tuite"
            src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
            fallback="C"
          />
        ))}
      </Flex>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        Dialog
      </Text>

      <Flex css={{ gap: '$4' }}>
        <Dialog>
          <Dialog.Trigger as={Button}>Delete repo</Dialog.Trigger>
          <Dialog.Content>
            <Text css={{ marginBottom: '$4' }}>Are you sure?</Text>
            <Flex css={{ justifyContent: 'space-between' }}>
              <Dialog.Close as={Button} variant="green">
                Agree to terms
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog>
      </Flex>
    </Box>
  );
}
