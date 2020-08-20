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
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="17.9053" cy="17.9054" r="14.5" stroke="currentColor" stroke-width="2"/>
                <path d="M13.2236 31.7273L32.2762 20.7273" stroke="currentColor"/>
                <path d="M3.72363 15.2727L22.7762 4.2727" stroke="currentColor"/>
                <path d="M9.05859 29.5132L26.3791 19.5132" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.62109 16.4868L26.9416 6.48682" stroke="currentColor" stroke-linecap="round"/>
                <path d="M13.6387 14.6353L22.9152 21.5132" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.1025 12.6355L26.3789 19.5131" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.62109 16.4868L19.4512 23.5131" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </IconButton>
            <Flex>
              <Text size="3" css={{ color: 'gray600', ml: 7 }}>Documentation</Text>
              <Text size="3" css={{ color: 'gray600', ml: 7 }}>About</Text>
              <Text size="3" css={{ color: 'gray600', ml: 7 }}>Blog</Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Container size="3" css={{ pt: 7 }}>
        <Text as="h1" size="9" css={{ fontWeight: '500', textAlign: 'center', mb: 4 }}>The modern styling library</Text>
      </Container>
      <Container size="2">
        <Text as="h2" size="6" css={{ color: 'gray600', textAlign: 'center', lineHeight: '30px' }}>Near-zero runtime, server-side rendering, multi-variant support, and a best-in-class developer experience.</Text>
        <Flex css={{ justifyContent: 'center' }}>
          <Text size="5" css={{ color: 'blue600', mt: 7 }}>Documentation</Text>
        </Flex>
      </Container>
      <Container size="2">
        <Flex css={{ justifyContent: 'center', mt: 7 }}>
          <Badge css={{ mx: 3 }}>Coming soon</Badge>
          <Badge variant="blue" css={{ mx: 3 }}>New</Badge>
          <Badge  variant="green" css={{ mx: 3 }}>Approved</Badge>
          <Badge variant="yellow" css={{ mx: 3 }}>Pending</Badge>
          <Badge variant="red" css={{ mx: 3 }}>Failed</Badge>
        </Flex>
      </Container>
      <Container size="2">
        <Input css={{ mt: 7 }} />
      </Container>
    </Box>
  );
}

export default Marketing;
