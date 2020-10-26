import React from 'react';
import { Box } from '../components/Box';
import { Avatar } from '../components/Avatar';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { Flex } from '../components/Flex';
import { Dialog } from '../components/Dialog';
import { AlertDialog } from '../components/AlertDialog';
import { Popover } from '../components/Popover';
import { Tooltip } from '../components/Tooltip';
import { ProgressBar } from '../components/ProgressBar';
import { Tabs } from '../components/Tabs';

export default function Closed() {
  return (
    <Box
      css={{
        height: '100vh',
        backgroundColor: '$loContrast',
        py: '130px',
        px: '260px',
        overflowY: 'auto',
      }}
    >
      <Text size="5" css={{ mt: '$7', mb: '$4' }}>
        Avatar
      </Text>

      <Flex css={{ gap: '$4', mb: '$4' }}>
        {[1, 2, 3, 4, 5, 6].map((size) => (
          <Avatar
            key={`one${size}`}
            size={size as any}
            shape="square"
            alt="Colm Tuite"
            src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
            fallback="C"
          />
        ))}
      </Flex>

      <Flex css={{ gap: '$4', mb: '$4' }}>
        {[1, 2, 3, 4, 5, 6].map((size) => (
          <Avatar
            key={`two${size}`}
            size={size as any}
            shape="square"
            alt="Colm Tuite"
            src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
            fallback="C"
            status="green"
          />
        ))}
      </Flex>

      <Flex css={{ gap: '$4' }}>
        {[1, 2, 3, 4, 5, 6].map((size) => (
          <Avatar
            size={size as any}
            shape="square"
            fallback="C"
            status="green"
            key={`three${size}`}
          />
        ))}
      </Flex>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        Dialog
      </Text>

      <Dialog>
        <Dialog.Trigger as={Button}>Open Dialog</Dialog.Trigger>
        <Dialog.Content>
          <Text css={{ mb: '$4' }}>Hello, from Dialog.</Text>
          <Dialog.Close as={Button}>Bye.</Dialog.Close>
        </Dialog.Content>
      </Dialog>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        AlertDialog
      </Text>

      <AlertDialog>
        <AlertDialog.Trigger as={Button}>Open AlertDialog</AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title as={Text} css={{ mb: '$4' }}>
            Hello, from AlertDialog.
          </AlertDialog.Title>
          <Flex css={{ justifyContent: 'space-between' }}>
            <AlertDialog.Action as={Button}>Ok</AlertDialog.Action>
            <AlertDialog.Cancel as={Button} variant="red">
              Cancel
            </AlertDialog.Cancel>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        Popover
      </Text>

      <Popover>
        <Popover.Trigger as={Button}>Open Popover</Popover.Trigger>
        <Popover.Content>
          <Text>Hello, from Popover.</Text>
        </Popover.Content>
      </Popover>

      <Popover>
        <Popover.Trigger as={Button} css={{ ml: '$4' }}>
          Open Popover (top)
        </Popover.Trigger>
        <Popover.Content side="top">
          <Text>Hello, from Popover.</Text>
        </Popover.Content>
      </Popover>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        Tooltip
      </Text>

      <Tooltip content="Tooltip shows on top by default.">
        <Button>Top</Button>
      </Tooltip>

      <Tooltip content="You get the idea." side="bottom">
        <Button css={{ ml: '$4' }}>Bottom</Button>
      </Tooltip>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        ProgressBar
      </Text>

      <Box css={{ mb: '$4' }}>
        <ProgressBar max={100} value={0} />
      </Box>
      <Box css={{ mb: '$4' }}>
        <ProgressBar max={100} value={30} />
      </Box>
      <Box css={{ mb: '$4' }}>
        <ProgressBar max={100} value={60} />
      </Box>
      <Box css={{ mb: '$4' }}>
        <ProgressBar max={100} value={100} />
      </Box>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        Tabs
      </Text>

      <Tabs defaultSelectedId="tab-one">
        <Tabs.List>
          <Tabs.Tab id="tab-one">One</Tabs.Tab>
          <Tabs.Tab id="tab-two">Two</Tabs.Tab>
          <Tabs.Tab id="tab-three">Three</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id="tab-one">
          <Box>
            <Text>Panel 1</Text>
            <Button>Test</Button>
          </Box>
        </Tabs.Panel>
        <Tabs.Panel id="tab-two">Panel 2</Tabs.Panel>
        <Tabs.Panel id="tab-three">Panel 3</Tabs.Panel>
      </Tabs>
    </Box>
  );
}
