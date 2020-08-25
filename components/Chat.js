import React from 'react';
import './App.css';
import Button from './Button';
import IconButton from './IconButton';
import Box from './Box';
import Flex from './Flex';
import Grid from './Grid';
import Badge from './Badge';
import { darkTheme } from '../css';

function Chat() {
  return (
    <Box className={darkTheme} css={{ backgroundColor: 'loContrast', height: '100%' }}>
      <Flex css={{ height: '100%' }}>
        <Box
          css={{
            width: '245px',
            borderRightWidth: '1px',
            borderRightStyle: 'solid',
            borderColor: 'line',
          }}
        ></Box>

        <Box
          css={{
            width: '245px',
            borderRightWidth: '1px',
            borderRightStyle: 'solid',
            borderColor: 'line',
          }}
        ></Box>

        <Box
          css={{
            width: '245px',
            borderRightWidth: '1px',
            borderRightStyle: 'solid',
            borderColor: 'line',
          }}
        ></Box>

        <Box css={{ flexGrow: 1 }}>
          <Grid css={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
            <Box>
              <Flex css={{ alignItems: 'center', mb: 6, gap: '32px' }}>
                <Button>
                  <Box css={{ mr: '1' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8H13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8 13V3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Box>
                  Button
                </Button>
                <Button size="large">
                  <Box css={{ mr: '2' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8H13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8 13V3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Box>
                  Large
                </Button>
              </Flex>
              <Flex css={{ alignItems: 'center', mb: 6, gap: '32px' }}>
                <Button>Button</Button>
                <Button variant="blue">Blue</Button>
                <Button variant="green">Green</Button>
                <Button variant="red">Red</Button>
                <Button variant="ghost">Ghost</Button>
              </Flex>
              <Flex css={{ alignItems: 'center', mb: 6, gap: '32px' }}>
                <Button state="active">Active</Button>
                <Button state="waiting">Waiting</Button>
              </Flex>
              <Flex css={{ alignItems: 'center', gap: '32px' }}>
                <Button disabled>Disabled</Button>
              </Flex>
            </Box>
            <Box>
              <Flex css={{ alignItems: 'center', mb: 6, gap: '32px' }}>
                <IconButton aria-label="Add something">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 13V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </IconButton>
                <IconButton aria-label="Add something" size="large">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 13V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </IconButton>
              </Flex>
              <Flex css={{ alignItems: 'center', mb: 6, gap: '32px' }}>
                <IconButton aria-label="Add something" variant="ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 13V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </IconButton>
                <IconButton aria-label="Add something" variant="raised">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 13V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </IconButton>
                <IconButton aria-label="Add something" size="large" variant="raised">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 13V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </IconButton>
                <IconButton aria-label="Add something" size="xl" variant="raised">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 13V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </IconButton>
                <IconButton aria-label="Add something" size="xxl" variant="raised">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 13V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </IconButton>
              </Flex>
              <Flex css={{ alignItems: 'center', mb: 6, gap: '32px' }}>
                <IconButton aria-label="Add something" state="active">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 13V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </IconButton>
                <IconButton aria-label="Add something" state="waiting">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 13V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </IconButton>
              </Flex>
              <Flex css={{ alignItems: 'center', mb: 6, gap: '32px' }}>
                <IconButton aria-label="Add something" disabled>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 13V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </IconButton>
              </Flex>
            </Box>

            <Box>
              <Flex css={{ alignItems: 'center', mb: 6, gap: '32px' }}>
                <Badge>Badge</Badge>
              </Flex>
              <Flex css={{ alignItems: 'center', mb: 6, gap: '32px' }}>
                <Badge>Badge</Badge>
                <Badge variant="blue">Badge</Badge>
                <Badge variant="green">Badge</Badge>
                <Badge variant="red">Badge</Badge>
                <Badge variant="yellow">Badge</Badge>
              </Flex>
            </Box>
          </Grid>
        </Box>

        <Box
          css={{
            width: '245px',
            borderLeftWidth: '1px',
            borderLeftStyle: 'solid',
            borderColor: 'line',
          }}
        ></Box>
      </Flex>

      <Box
        css={{
          position: 'absolute',
          top: '400px',
          left: '1400px',
          bottom: 0,
          width: '160px',
          height: '250px',
          borderRadius: 2,
          boxShadow:
            '0 16px 32px -10px hsl(206deg 12% 5% / 25%), 0 8px 16px -15px hsl(0deg 0% 0% / 10%)',
        }}
      ></Box>
    </Box>
  );
}

export default Chat;
