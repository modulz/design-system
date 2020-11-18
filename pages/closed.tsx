import React from 'react';
import { Box } from '../components/Box';
import { Avatar } from '../components/Avatar';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { Flex } from '../components/Flex';
import { Dialog } from '../components/Dialog';
import { Dialog as FramerDialog } from '../components/FramerDialog';
import { AlertDialog } from '../components/AlertDialog';
import { Popover } from '../components/Popover';
import { Tooltip } from '../components/Tooltip';
import { ProgressBar } from '../components/ProgressBar';
import { Tabs } from '../components/Tabs';
import { Tabs as AnimatedTabs } from '../components/AnimatedTabs';
import { Accordion } from '../components/Accordion';
import { Accordion as FramerAccordion } from '../components/FramerAccordion';
import { Label } from '../components/Label';
import { Switch } from '../components/Switch';
import { SimpleToggle } from '../components/SimpleToggle';

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
        Dialog with Framer Motion
      </Text>

      <FramerDialog>
        <FramerDialog.Trigger as={Button}>Open FramerDialog</FramerDialog.Trigger>
        <FramerDialog.Content>
          <Text css={{ mb: '$4' }}>Hello, from FramerDialog.</Text>
          <FramerDialog.Close as={Button}>Bye.</FramerDialog.Close>
        </FramerDialog.Content>
      </FramerDialog>

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

      <Tooltip content="You get the idea." side="right">
        <Button css={{ ml: '$4' }}>Right</Button>
      </Tooltip>

      <Tooltip content="You get the idea." side="left">
        <Button css={{ ml: '$4' }}>Left</Button>
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
          <Tabs.Tab id="tab-one">
            <Text size="4">One</Text>
          </Tabs.Tab>
          <Tabs.Tab id="tab-two">
            <Text size="4">Two</Text>
          </Tabs.Tab>
          <Tabs.Tab id="tab-three">
            <Text size="4">Three</Text>
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id="tab-one">
          <Box>
            <Text>Panel 1</Text>
            <Button css={{ mt: '$2' }}>Test focus</Button>
          </Box>
        </Tabs.Panel>
        <Tabs.Panel id="tab-two">
          <Text>Panel 2</Text>
        </Tabs.Panel>
        <Tabs.Panel id="tab-three">
          <Text>Panel 3</Text>
        </Tabs.Panel>
      </Tabs>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        AnimatedTabs
      </Text>

      <AnimatedTabs defaultSelectedId="tab-one">
        <AnimatedTabs.List>
          <AnimatedTabs.Tab
            id="tab-one"
            css={{
              '&[data-state="active"]': {
                backgroundColor: '$red600',
              },
            }}
          >
            <Text size="2">One</Text>
          </AnimatedTabs.Tab>
          <AnimatedTabs.Tab
            id="tab-two"
            css={{
              '&[data-state="active"]': {
                backgroundColor: '$blue600',
              },
            }}
          >
            <Text size="2">Two</Text>
          </AnimatedTabs.Tab>
          <AnimatedTabs.Tab
            id="tab-three"
            css={{
              '&[data-state="active"]': {
                backgroundColor: '$purple600',
              },
            }}
          >
            <Text size="2">Three</Text>
          </AnimatedTabs.Tab>
        </AnimatedTabs.List>
        <Box css={{ position: 'relative' }}>
          <AnimatedTabs.Panel id="tab-one" css={{ backgroundColor: '$red600' }}>
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '50%',
                borderRadius: '15px',
                my: '$2',
              }}
            />

            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '20%',
                borderRadius: '15px',
                my: '$2',
              }}
            />

            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '20%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '20%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '30%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '10%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '10%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '30%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '10%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '10%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '10%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '10%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
          </AnimatedTabs.Panel>
          <AnimatedTabs.Panel id="tab-two" css={{ backgroundColor: '$blue600' }}>
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '50%',
                borderRadius: '15px',
                my: '$2',
              }}
            />

            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '20%',
                borderRadius: '15px',
                my: '$2',
              }}
            />

            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '20%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '20%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '30%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '10%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '10%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '30%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '10%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '10%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '10%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '10%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
          </AnimatedTabs.Panel>
          <AnimatedTabs.Panel id="tab-three" css={{ backgroundColor: '$purple600' }}>
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '50%',
                borderRadius: '15px',
                my: '$2',
              }}
            />

            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '20%',
                borderRadius: '15px',
                my: '$2',
              }}
            />

            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '20%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '20%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '30%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '10%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '10%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '30%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '10%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '10%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '10%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
            <Box
              css={{
                backgroundColor: '$loContrast',
                height: '$2',
                width: '10%',
                borderRadius: '15px',
                my: '$2',
              }}
            />
          </AnimatedTabs.Panel>
        </Box>
      </AnimatedTabs>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        Accordion
      </Text>

      <Accordion>
        <Accordion.Item value="accordion-one">
          <Accordion.Button>
            <Text size="4">Accordion one</Text>
          </Accordion.Button>
          <Accordion.Panel>
            <Text size="4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="accordion-two">
          <Accordion.Button>
            <Text size="4">Accordion two</Text>
          </Accordion.Button>
          <Accordion.Panel>
            <Text size="4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        FramerAccordion
      </Text>

      <FramerAccordion>
        <FramerAccordion.Item value="accordion-one">
          <FramerAccordion.Button>
            <Text size="4">FramerAccordion one</Text>
          </FramerAccordion.Button>
          <FramerAccordion.Panel>
            <Text size="4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </FramerAccordion.Panel>
        </FramerAccordion.Item>
        <FramerAccordion.Item value="accordion-two">
          <FramerAccordion.Button>
            <Text size="4">FramerAccordion two</Text>
          </FramerAccordion.Button>
          <FramerAccordion.Panel>
            <Text size="4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </FramerAccordion.Panel>
        </FramerAccordion.Item>
      </FramerAccordion>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        Label
      </Text>

      <Label size="3">Label</Label>

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        Switch
      </Text>

      <Switch />

      <Text size="5" css={{ mt: '$9', mb: '$4' }}>
        SimpleToggle
      </Text>

      <SimpleToggle />
    </Box>
  );
}
