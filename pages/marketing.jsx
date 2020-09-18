import React from 'react';
import { Button } from '../components/Button';
import { IconButton } from '../components/IconButton';
import { Container } from '../components/Container';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { Badge } from '../components/Badge';
import { Text } from '../components/Text';
import { Link } from '../components/Link';
import { Divider } from '../components/Divider';
import { Code } from '../components/Code';
import { Input } from '../components/Input';
import { Image } from '../components/Image';
import { Card } from '../components/Card';
import { TreeItem } from '../components/TreeItem';
import { darkTheme } from '../stitches.config';
import { Dialog, styles as dialogStyles } from '@interop-ui/react-dialog';
import { Tooltip, styles as tooltipStyles } from '@interop-ui/react-tooltip';
import { Popover, styles as popoverStyles } from '@interop-ui/react-popover';
import { Accordion } from '@interop-ui/react-accordion';
import { Avatar } from '@interop-ui/react-avatar';
import { Tabs } from '@interop-ui/react-tabs';
import { SimpleToggle } from '../components/ToggleButton';
import { Checkbox } from '../components/Checkbox';
import { Checkbox as CheckboxPrimitive, styles as checkboxStyles } from '@interop-ui/react-checkbox';

function Marketing() {
  return (
    <Box css={{ bc: '$loContrast', minHeight: '100%', mb: '$9' }}>
      
      <Box as="header" css={{ py: '$4' }}>
        <Container size="4">
          <Flex css={{ justifyContent: 'space-between' }}>
            <IconButton variant="ghost" size="large">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <circle cx="17.9053" cy="17.9054" r="14.5" stroke="currentColor" strokeWidth="2" />
                <path d="M13.2236 31.7273L32.2762 20.7273" stroke="currentColor" />
                <path d="M3.72363 15.2727L22.7762 4.2727" stroke="currentColor" />
                <path
                  d="M9.05859 29.5132L26.3791 19.5132"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.62109 16.4868L26.9416 6.48682"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
                <path
                  d="M13.6387 14.6353L22.9152 21.5132"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.1025 12.6355L26.3789 19.5131"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.62109 16.4868L19.4512 23.5131"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
            <Flex>
              <Text size="3" css={{ color: '$gray600', ml: '$7' }}>
                Documentation
              </Text>
              <Text size="3" css={{ color: '$gray600', ml: '$7' }}>
                About
              </Text>
              <Text size="3" css={{ color: '$gray600', ml: '$7' }}>
                Blog
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Container size="3" css={{ pt: '$7' }}>
        <Text as="h1" size="9" css={{ ta: 'center', fontWeight: '500', lineHeight: '55px', mb: '$3' }}>
          The modern styling library
        </Text>
      </Container>

      <Container size="2">
        <Text as="h2" size="6" css={{ ta: 'center', color: '$gray600', lineHeight: '30px' }}>
          Near-zero runtime, server-side rendering, multi-variant support, and a best-in-class
          developer experience.
        </Text>

        <Flex css={{ justifyContent: 'center' }}>
          <Text size="5" css={{ color: '$blue600', mt: '$9' }}>
            Documentation
          </Text>
        </Flex>
      </Container>

      <Container size="2">
        <Flex css={{ justifyContent: 'center', mt: '$9' }}>
          <Badge css={{ mx: 3 }}>Coming soon</Badge>
          <Badge variant="blue" css={{ mx: 3 }}>
            New
          </Badge>
          <Badge variant="green" css={{ mx: 3 }}>
            Approved
          </Badge>
          <Badge variant="yellow" css={{ mx: 3 }}>
            Pending
          </Badge>
          <Badge variant="red" css={{ mx: 3 }}>
            Failed
          </Badge>
        </Flex>
      </Container>
      <Container size="2">
        <Flex css={{ gap: '$6', mt: '$9' }}>
          <Button>Button</Button>
          <Button variant="blue">
            Important
          </Button>
          <Button variant="green">
            Secure
          </Button>
          <Button variant="red">
            Warning
          </Button>
        </Flex>
      </Container>
      <Container size="2">
        <Input placeholder="Search components..." css={{ mt: '$7' }} />
      </Container>
      <Container size="2" css={{ mt: '$7' }}>
        <Text size="4" as="p" css={{ lineHeight: '25px' }}>
          There are 5 variants to choose from. Use <Code>console.log('Radix').console</Code> is for
          positive states. Traditional business literature won’t help you solve it- most of that
          stuff is focused on life after product/market fit, after the Trough of Sorrow. A lot of
          startup stuff is focused on the initial phases, when you don’t have a team, idea, or
          investors.
        </Text>
      </Container>
      <Container size="2" css={{ mt: '$7' }}>
        <Flex
          css={{
            width: 4,
            height: 4,
            backgroundColor: '$blue300',
            boxShadow: 'inset 0 0 0 1px $blue400',
            color: '$blue600',
            borderRadius: '3px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
              fill="currentColor"
            />
          </svg>
        </Flex>
        <Flex
          css={{
            width: 4,
            height: 4,
            boxShadow: 'inset 0 0 0 1px $gray400',
            color: '$blue600',
            borderRadius: '3px',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 3,
          }}
        ></Flex>
      </Container>
      <Container size="2" css={{ mt: '$7' }}>
        <Flex
          css={{
            width: 4,
            height: 4,
            boxShadow: 'inset 0 0 0 1px $blue500',
            color: '$blue600',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            css={{ width: 2, height: 2, backgroundColor: '$blue500', borderRadius: '50%' }}
          ></Box>
        </Flex>
        <Flex
          css={{
            width: 4,
            height: 4,
            boxShadow: 'inset 0 0 0 1px $gray400',
            color: '$blue600',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 4,
          }}
        ></Flex>
      </Container>
      <Container size="2" css={{ my: '$7' }}>
        <Text size="4" as="p" css={{ lineHeight: '25px' }}>
          There are 5 variants to choose from. Use is for positive states.{' '}
          <Link css={{}} href="#">
            This is a link
          </Link>{' '}
          Traditional business literature won’t help you solve it- most of that stuff is focused on
          life after product/market fit, after the Trough of Sorrow. A lot of startup stuff is
          focused on the initial phases, when you don’t have a team, idea, or investors.
        </Text>
        <Link variant="blue" css={{}} href="#">
          This is a link
        </Link>
        <Link variant="subtle" css={{}} href="#">
          This is a link
        </Link>
      </Container>
      
      <Container size="2" css={{ py: '$7' }}>
        <Dialog>
          <Dialog.Trigger as={Button}>Open</Dialog.Trigger>
          <Dialog.Overlay style={{
            ...dialogStyles.overlay,
            backgroundColor: 'rgba(0,0,0,.15)'
            }}
          />
          <Dialog.Content as={Box} css={{
            ...dialogStyles.content,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '$loContrast',
            minWidth: 200,
            maxWidth: 'fit-content',
            maxHeight: '85vh',
            padding: 20,
            borderRadius: 5,
            boxShadow: 'rgba(14, 18, 22, 0.35) 0px 10px 38px -10px, rgba(14, 18, 22, 0.2) 0px 10px 20px -15px',
            marginTop: '-5vh',
          }}>
            <Text size={5} as="h6" css={{ fontWeight: 500, mb: '$3' }}>Dialog Heading</Text>
            <Text size={3} as="p" css={{ lineHeight: '25px' }}>There are 5 variants to choose from. Use is for positive states. This is a link Traditional business literature won’t help you solve it- most of that stuff is focused on life after product/market fit, after the Trough of Sorrow.</Text>
            <Popover>
              <Popover.Trigger as={Button}>Open</Popover.Trigger>
              <Popover.Position sideOffset={0}>
                <Popover.Content
                  style={{
                    ...popoverStyles.content,
                    backgroundColor: 'white',
                    width: 250,
                    height: 150,
                    padding: 20,
                    borderRadius: 5,
                    boxShadow: 'rgba(22, 23, 24, 0.35) 0px 10px 38px -10px, rgba(22, 23, 24, 0.2) 0px 10px 20px -15px',
                  }}
                >
                  <Popover.Close as={Button} variant="ghost">Close</Popover.Close>
                </Popover.Content>
                <Popover.Arrow width={13} height={7} style={{ ...popoverStyles.arrow, fill: 'white' }} />
              </Popover.Position>
            </Popover>
            <Box css={{
              position: 'absolute',
              top: 0,
              right: 0,
              margin: '$2',
            }}>
              <Tooltip>
                <Tooltip.Trigger as="div">
                  <Dialog.Close as={IconButton} variant="ghost" aria-label="Close">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                    </svg>
                  </Dialog.Close>
                </Tooltip.Trigger>
                <Tooltip.Position side="top" align="center" sideOffset={0}>
                  <Tooltip.Content
                    aria-label="Close"
                    as={Box}
                    css={{
                      backgroundColor: '$hiContrast',
                      borderRadius: '$2',
                      padding: '$1 $2',
                      maxWidth: 300,
                    }}>
                    <Text size={1} as="p" css={{ lineHeight: '17px', color: '$loContrast' }}>Close</Text>
                  </Tooltip.Content>
                  <Tooltip.Arrow
                    offset={0}
                    width={13}
                    height={7}
                    style={{ ...tooltipStyles.arrow, fill: 'black' }}
                  />
                </Tooltip.Position>
              </Tooltip>
            </Box>
          </Dialog.Content>
        </Dialog>
      </Container>
      <Container size="2" css={{ py: '$7' }}>
        <Popover>
          <Popover.Trigger as={Button}>Open</Popover.Trigger>
          <Popover.Position side="left" align="end">
            <Popover.Content
              style={{
                ...popoverStyles.content,
                backgroundColor: 'white',
                padding: 20,
                borderRadius: 5,
                boxShadow: 'rgba(22, 23, 24, 0.35) 0px 10px 38px -10px, rgba(22, 23, 24, 0.2) 0px 10px 20px -15px',
              }}
            >
              <Popover.Close as={IconButton} variant="ghost" aria-label="Close">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                </svg>
              </Popover.Close>
              <Popover>
                <Popover.Trigger as={Button}>Open</Popover.Trigger>
                <Popover.Position side="left" align="end">
                  <Popover.Content
                    style={{
                      boxSizing: 'border-box',
                      backgroundColor: 'white',
                      padding: 20,
                      borderRadius: 5,
                      boxShadow: 'rgba(22, 23, 24, 0.35) 0px 10px 38px -10px, rgba(22, 23, 24, 0.2) 0px 10px 20px -15px',
                    }}
                  >
                    <Popover.Close as={IconButton} variant="ghost" aria-label="Close">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                      </svg>
                    </Popover.Close>
                  </Popover.Content>
                </Popover.Position>
              </Popover>
            </Popover.Content>
          </Popover.Position>
        </Popover>
      </Container>
      <Container size="2" css={{ py: '$7' }}>
        <Accordion>
          <Accordion.Item value="one" style={{ lineHeight: 1, }}>
            <Accordion.Button style={{ width: '100%', border: 'none', display: 'inline-flex', padding: 0, lineHeight: 1, verticalAlign: 'middle' }}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
              </svg>
            </Accordion.Button>
            <Accordion.Panel>
              <Text size={3}>I’m an investor with Menlo Ventures.  I’ve been impressed by what you have been building at Modulz and wanted to reach out. It’s an area that I’ve been spending time in alongside with my colleague, who formerly lead product and growth at Evernote. Would love to connect with you if you are open to it.</Text>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="two" style={{ lineHeight: 1, }}>
            <Accordion.Button style={{ width: '100%', border: 'none', display: 'inline-flex', padding: 0, lineHeight: 1, verticalAlign: 'middle' }}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
              </svg>
            </Accordion.Button>
            <Accordion.Panel>
              <Text size={3}>I’m an investor with Menlo Ventures.  I’ve been impressed by what you have been building at Modulz and wanted to reach out. It’s an area that I’ve been spending time in alongside with my colleague, who formerly lead product and growth at Evernote. Would love to connect with you if you are open to it.</Text>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="three" disabled style={{ lineHeight: 1, }}>
            <Accordion.Button style={{ width: '100%', border: 'none', display: 'inline-flex', padding: 0, lineHeight: 1, verticalAlign: 'middle' }}>Three (disabled)</Accordion.Button>
            <Accordion.Panel>
              <Text size={3}>I’m an investor with Menlo Ventures.  I’ve been impressed by what you have been building at Modulz and wanted to reach out. It’s an area that I’ve been spending time in alongside with my colleague, who formerly lead product and growth at Evernote. Would love to connect with you if you are open to it.</Text>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="four" style={{ lineHeight: 1, }}>
            <Accordion.Button style={{ width: '100%', border: 'none', display: 'inline-flex', padding: 0, lineHeight: 1, verticalAlign: 'middle' }}>Four</Accordion.Button>
            <Accordion.Panel>
              <Text size={3}>I’m an investor with Menlo Ventures.  I’ve been impressed by what you have been building at Modulz and wanted to reach out. It’s an area that I’ve been spending time in alongside with my colleague, who formerly lead product and growth at Evernote. Would love to connect with you if you are open to it.</Text>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
      <Container size="2" css={{ py: '$7' }}>
        <Avatar as={Box} css={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 35,
          height: 35,
          borderRadius: '50%',
          overflow: 'hidden',
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
          backgroundColor: '$gray600',
          linearGradient: '0deg, purple 0%, pink 100%',
        }}>
          <Avatar.Image
            alt="John Smith"
            as={Image}
            // src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
          />
          <Avatar.Fallback as={Text} size={5} css={{ color: '$loContrast' }}>
            C
          </Avatar.Fallback>
        </Avatar>
      </Container>
      <Container size="2" css={{ py: '$7' }}>
        <Tabs defaultSelectedId="tab3">
          <Tabs.List aria-label="Tabs example" style={{ display: 'flex' }}>
            <Tabs.Tab
              as={Box}
              id="tab1"
              css={{
                height: '$5',
                display: 'inline-flex',
                lineHeight: 1,
                px: '$2',
                userSelect: 'none',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <Box css={{ mr: '$1' }}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L11.8581 2.25806C12.1021 2.01398 12.4979 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13362 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM8 4.5C8 4.22386 7.77614 4 7.5 4C7.22386 4 7 4.22386 7 4.5V9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5V4.5Z" fill="#282B2E"/>
                </svg>
              </Box>
              <Text size={2}>Tab 1</Text>
            </Tabs.Tab>
            <Tabs.Tab
              as={Box}
              id="tab2"
              css={{
                height: '$5',
                display: 'inline-flex',
                lineHeight: 1,
                px: '$2',
                userSelect: 'none',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <Box css={{ mr: '$1' }}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L11.8581 2.25806C12.1021 2.01398 12.4979 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13362 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM8 4.5C8 4.22386 7.77614 4 7.5 4C7.22386 4 7 4.22386 7 4.5V9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5V4.5Z" fill="#282B2E"/>
                </svg>
              </Box>
              <Text size={2}>Tab 2</Text>
            </Tabs.Tab>
            <Tabs.Tab
              as={Box}
              id="tab3"
              css={{
                height: '$5',
                display: 'inline-flex',
                lineHeight: 1,
                px: '$2',
                userSelect: 'none',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <Box css={{ mr: '$1' }}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L11.8581 2.25806C12.1021 2.01398 12.4979 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13362 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM8 4.5C8 4.22386 7.77614 4 7.5 4C7.22386 4 7 4.22386 7 4.5V9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5V4.5Z" fill="#282B2E"/>
                </svg>
              </Box>
              <Text size={2}>Tab 3</Text>
            </Tabs.Tab>
          </Tabs.List>
          <Divider css={{ width: '100%', mb: '$4' }} />
          <Tabs.Panel id="tab1">
            <Text size={3} as="p" css={{ lineHeight: '20px' }}>Hi Colm, Now that the summer is over it'd be great to re-ignite our earlier discussions.</Text>
          </Tabs.Panel>
          <Tabs.Panel id="tab2">
            <Text size={3} as="p" css={{ lineHeight: '20px' }}>I discussed Modulz with the team last week and we'd be interested in exploring the round you're looking to raise.</Text>
          </Tabs.Panel>
          <Tabs.Panel id="tab3">
            <Text size={3} as="p" css={{ lineHeight: '20px' }}>Would you be open to a follow-up call with myself and our General Partner Jos? Happy to jump on a quick call to discuss.</Text>
          </Tabs.Panel>
        </Tabs>
      </Container>
      
      <Container size="2" css={{ py: '$7' }}>
        <Popover>
          <Popover.Trigger as={Button}>Open</Popover.Trigger>
          <Popover.Position side="top">
            <Popover.Content
              style={{
                boxSizing: 'border-box',
                backgroundColor: 'white',
                borderRadius: 5,
                boxShadow: 'rgba(22, 23, 24, 0.35) 0px 10px 38px -10px, rgba(22, 23, 24, 0.2) 0px 10px 20px -15px',
                width: 300,
              }}
            >
              <Text size={4} as="h6" css={{ fontWeight: 500 }}>fwefewfw  w few fw</Text>
              <Popover.Close as={IconButton} variant="ghost" aria-label="Close">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                </svg>
              </Popover.Close>
              <Tabs defaultSelectedId="tab3">
                <Tabs.List aria-label="Tabs example" style={{ display: 'flex' }}>
                  <Tabs.Tab
                    as={Box}
                    id="tab1"
                    css={{
                      height: '$5',
                      display: 'inline-flex',
                      lineHeight: 1,
                      px: '$2',
                      userSelect: 'none',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                    <Box css={{ mr: '$1' }}>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L11.8581 2.25806C12.1021 2.01398 12.4979 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13362 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM8 4.5C8 4.22386 7.77614 4 7.5 4C7.22386 4 7 4.22386 7 4.5V9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5V4.5Z" fill="#282B2E"/>
                      </svg>
                    </Box>
                    <Text size={2}>Tab 1</Text>
                  </Tabs.Tab>
                  <Tabs.Tab
                    as={Box}
                    id="tab2"
                    css={{
                      height: '$5',
                      display: 'inline-flex',
                      lineHeight: 1,
                      px: '$2',
                      userSelect: 'none',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                    <Box css={{ mr: '$1' }}>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L11.8581 2.25806C12.1021 2.01398 12.4979 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13362 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM8 4.5C8 4.22386 7.77614 4 7.5 4C7.22386 4 7 4.22386 7 4.5V9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5V4.5Z" fill="#282B2E"/>
                      </svg>
                    </Box>
                    <Text size={2}>Tab 2</Text>
                  </Tabs.Tab>
                  <Tabs.Tab
                    as={Box}
                    id="tab3"
                    css={{
                      height: '$5',
                      display: 'inline-flex',
                      lineHeight: 1,
                      px: '$2',
                      userSelect: 'none',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                    <Box css={{ mr: '$1' }}>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L11.8581 2.25806C12.1021 2.01398 12.4979 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13362 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM8 4.5C8 4.22386 7.77614 4 7.5 4C7.22386 4 7 4.22386 7 4.5V9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5V4.5Z" fill="#282B2E"/>
                      </svg>
                    </Box>
                    <Text size={2}>Tab 3</Text>
                  </Tabs.Tab>
                </Tabs.List>
                <Divider css={{ width: '100%', mb: '$4' }} />
                <Tabs.Panel id="tab1">
                  <Box css={{ p: '$3' }}>
                    <Input placeholder="Search" />
                  </Box>
                  <Box>
                    <Text size={2} as="p" css={{ lineHeight: '20px' }}>Hi Colm, Now that the summer is over it'd be great to re-ignite our earlier discussions.</Text>
                  </Box>
                </Tabs.Panel>
                <Tabs.Panel id="tab2">
                  <Box css={{ p: '$3' }}>
                    <Input placeholder="Search" />
                  </Box>
                  <Text size={3} as="p" css={{ lineHeight: '20px' }}>I discussed Modulz with the team last week and we'd be interested in exploring the round you're looking to raise.</Text>
                </Tabs.Panel>
                <Tabs.Panel id="tab3">
                  <Box css={{ p: '$3' }}>
                    <Input placeholder="Search" />
                  </Box>
                  <Text size={3} as="p" css={{ lineHeight: '20px' }}>Would you be open to a follow-up call with myself and our General Partner Jos? Happy to jump on a quick call to discuss.</Text>
                </Tabs.Panel>
              </Tabs>
            </Popover.Content>
          </Popover.Position>
        </Popover>
      </Container>
      
      <Container size="2" css={{ py: '$7' }}>
        <SimpleToggle>Toggle</SimpleToggle>
      </Container>

      <Container size="2" css={{ py: '$7' }}>
        <Checkbox>
          <CheckboxPrimitive.Indicator style={{ ...checkboxStyles.indicator }}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
            </svg>
          </CheckboxPrimitive.Indicator>
        </Checkbox>
        <Button variant="ghost" size="large" as="label">
          <Checkbox>
            <CheckboxPrimitive.Indicator style={{ ...checkboxStyles.indicator }}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
              </svg>
            </CheckboxPrimitive.Indicator>
          </Checkbox>
          <Text size={2} css={{ ml: '$2' }}>Checkbox label</Text>
        </Button>
        <Button variant="ghost" size="large" as="label">
          <Checkbox>
            <CheckboxPrimitive.Indicator style={{ ...checkboxStyles.indicator }}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
              </svg>
            </CheckboxPrimitive.Indicator>
          </Checkbox>
          <Text size={2} css={{ ml: '$2' }}>Checkbox label</Text>
        </Button>
      </Container>
      
    </Box>
  );
}

export default Marketing;
