import React from 'react';
import Button from '../components/Button';
import IconButton from '../components/IconButton';
import Container from '../components/Container';
import Box from '../components/Box';
import Flex from '../components/Flex';
import Grid from '../components/Grid';
import Badge from '../components/Badge';
import Text from '../components/Text';
import Divider from '../components/Divider';
import Code from '../components/Code';
import Input from '../components/Input';
import Card from '../components/Card';
import TreeItem from '../components/TreeItem';
import { darkTheme } from '../css';

function Marketing() {
  return (
    <Box css={{ bc: 'loContrast', minHeight: '100%' }}>
      <Box as="header" css={{ py: 4 }}>
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
              <Text size="3" css={{ color: 'gray600', ml: 7 }}>
                Documentation
              </Text>
              <Text size="3" css={{ color: 'gray600', ml: 7 }}>
                About
              </Text>
              <Text size="3" css={{ color: 'gray600', ml: 7 }}>
                Blog
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Container size="3" css={{ pt: 7 }}>
        <Text as="h1" size="9" css={{ fontWeight: '500', textAlign: 'center', mb: 4 }}>
          The modern styling library
        </Text>
      </Container>
      <Container size="2">
        <Text as="h2" size="6" css={{ color: 'gray600', textAlign: 'center', lineHeight: '30px' }}>
          Near-zero runtime, server-side rendering, multi-variant support, and a best-in-class
          developer experience.
        </Text>
        <Flex css={{ justifyContent: 'center' }}>
          <Text size="5" css={{ color: 'blue600', mt: 9 }}>
            Documentation
          </Text>
        </Flex>
      </Container>
      <Container size="2">
        <Flex css={{ justifyContent: 'center', mt: 9 }}>
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
        <Input placeholder="Search components..." css={{ mt: 7 }} />
      </Container>
      <Container size="2" css={{ mt: 7 }}>
        <Text size="4" as="p" css={{ lineHeight: '25px' }}>
          There are 5 variants to choose from. Use <Code>console.log('Radix').console</Code> is for
          positive states. Traditional business literature won’t help you solve it- most of that
          stuff is focused on life after product/market fit, after the Trough of Sorrow. A lot of
          startup stuff is focused on the initial phases, when you don’t have a team, idea, or
          investors.
        </Text>
      </Container>
      <Container size="2" css={{ mt: 7 }}>
        <Flex
          css={{
            width: 4,
            height: 4,
            backgroundColor: 'blue300',
            boxShadow: 'inset 0 0 0 1px blue400',
            color: 'blue600',
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
            boxShadow: 'inset 0 0 0 1px gray400',
            color: 'blue600',
            borderRadius: '3px',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 3,
          }}
        ></Flex>
      </Container>
      <Container size="2" css={{ mt: 7 }}>
        <Flex
          css={{
            width: 4,
            height: 4,
            boxShadow: 'inset 0 0 0 1px blue500',
            color: 'blue600',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box css={{ width: 2, height: 2, backgroundColor: 'blue500', borderRadius: '50%' }}></Box>
        </Flex>
        <Flex
          css={{
            width: 4,
            height: 4,
            boxShadow: 'inset 0 0 0 1px gray400',
            color: 'blue600',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 4,
          }}
        ></Flex>
      </Container>
    </Box>
  );
}

export default Marketing;
