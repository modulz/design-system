import React from 'react';
import { Button } from '../components/Button';
import { IconButton } from '../components/IconButton';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { Badge } from '../components/Badge';
import { Text } from '../components/Text';
import { Divider } from '../components/Divider';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { TreeItem } from '../components/TreeItem';
import { darkTheme } from '../css';

function Home() {
  return (
    <Box css={{ minHeight: '100%' }}>
      <Box
        css={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          backgroundColor: 'loContrast',
          py: 2,
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomColor: 'gray300',
        }}
      >
        <Flex css={{ justifyContent: 'space-between', px: 2 }}>
          <Flex>
            <IconButton variant="ghost">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 14.5V0.5L12.5 7.5L4.5 14.5Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
            <Flex css={{ alignItems: 'center' }}>
              <Button variant="ghost">Drafts</Button>
              <Text size="2">/</Text>
              <Button variant="ghost">Untitled</Button>
            </Flex>
          </Flex>
          <Flex>
            <IconButton variant="ghost">
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
                  d="M1 3.5C1 3.22386 1.22386 3 1.5 3H13.5C13.7761 3 14 3.22386 14 3.5C14 3.77614 13.7761 4 13.5 4H1.5C1.22386 4 1 3.77614 1 3.5Z"
                  fill="#0488FC"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="#0488FC"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.5 1C3.77614 1 4 1.22386 4 1.5V13.5C4 13.7761 3.77614 14 3.5 14C3.22386 14 3 13.7761 3 13.5V1.5C3 1.22386 3.22386 1 3.5 1Z"
                  fill="#0488FC"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5 1C11.7761 1 12 1.22386 12 1.5V13.5C12 13.7761 11.7761 14 11.5 14C11.2239 14 11 13.7761 11 13.5V1.5C11 1.22386 11.2239 1 11.5 1Z"
                  fill="#0488FC"
                />
                <rect x="4" y="4" width="7" height="7" fill="#CDE7FE" />
              </svg>
            </IconButton>
            <IconButton variant="ghost">
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
                  d="M3.5 2.05C3.22386 2.05 3 2.27386 3 2.55V4.2C3 4.47615 3.22386 4.7 3.5 4.7C3.77614 4.7 4 4.47615 4 4.2V3.05H7V11.95H6C5.72386 11.95 5.5 12.1739 5.5 12.45C5.5 12.7261 5.72386 12.95 6 12.95H7.5H9C9.27614 12.95 9.5 12.7261 9.5 12.45C9.5 12.1739 9.27614 11.95 9 11.95H8V3.05H11V4.2C11 4.47615 11.2239 4.7 11.5 4.7C11.7761 4.7 12 4.47615 12 4.2V2.55C12 2.27386 11.7761 2.05 11.5 2.05H7.5H3.5Z"
                  fill="#0488FC"
                />
              </svg>
            </IconButton>
            <IconButton variant="ghost">
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
                  d="M1 3.5C1 3.22386 1.22386 3 1.5 3H13.5C13.7761 3 14 3.22386 14 3.5C14 3.77614 13.7761 4 13.5 4H1.5C1.22386 4 1 3.77614 1 3.5Z"
                  fill="#0488FC"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="#0488FC"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.5 1C3.77614 1 4 1.22386 4 1.5V13.5C4 13.7761 3.77614 14 3.5 14C3.22386 14 3 13.7761 3 13.5V1.5C3 1.22386 3.22386 1 3.5 1Z"
                  fill="#0488FC"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5 1C11.7761 1 12 1.22386 12 1.5V13.5C12 13.7761 11.7761 14 11.5 14C11.2239 14 11 13.7761 11 13.5V1.5C11 1.22386 11.2239 1 11.5 1Z"
                  fill="#0488FC"
                />
                <rect x="4" y="4" width="7" height="7" fill="#CDE7FE" />
              </svg>
            </IconButton>
          </Flex>
          <Flex css={{ alignItems: 'center' }}>
            <IconButton variant="ghost">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 14.5V0.5L12.5 7.5L4.5 14.5Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
            <Button variant="blue">
              <Box css={{ mr: '1' }}>
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
                    d="M8 3C8 2.72386 7.77614 2.5 7.5 2.5C7.22386 2.5 7 2.72386 7 3V7H3C2.72386 7 2.5 7.22386 2.5 7.5C2.5 7.77614 2.72386 8 3 8H7V12C7 12.2761 7.22386 12.5 7.5 12.5C7.77614 12.5 8 12.2761 8 12V8H12C12.2761 8 12.5 7.77614 12.5 7.5C12.5 7.22386 12.2761 7 12 7H8V3Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              Share
            </Button>
            <Divider orientation="vertical" css={{ mx: 3 }} />
            <IconButton variant="ghost">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 14.5V0.5L12.5 7.5L4.5 14.5Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
          </Flex>
        </Flex>
      </Box>
      <Flex css={{ height: '100%' }}>
        <Box
          css={{
            position: 'absolute',
            top: '46px',
            left: 0,
            bottom: 0,
            width: '250px',
            backgroundColor: 'loContrast',
            borderRightWidth: '1px',
            borderRightStyle: 'solid',
            borderColor: 'canvas',
          }}
        >
          <TreeItem css={{ px: 4 }}>
            <Box css={{ color: 'gray500' }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" />
                <circle cx="7.5" cy="7.5" r="2.5" fill="currentColor" />
              </svg>
            </Box>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem css={{ px: 4 }}>
            <Box css={{ color: 'gray500' }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" y="3.5" width="14" height="8" rx="4" stroke="currentColor" />
                <circle cx="10.5" cy="7.5" r="4" stroke="currentColor" />
              </svg>
            </Box>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem css={{ px: 4 }}>
            <Box css={{ color: 'gray500' }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="3" stroke="currentColor" />
                <path d="M0.5 7.5H4.5" stroke="currentColor" strokeLinecap="round" />
                <path d="M10.5 7.5H14.5" stroke="currentColor" strokeLinecap="round" />
              </svg>
            </Box>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem css={{ px: 4 }}>
            <Box css={{ color: 'gray500' }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 4.5V2.5H2.5V4.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.5 12.5H10.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 12.5V2.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem css={{ px: 4 }}>
            <Box css={{ color: 'gray500' }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" />
                <circle cx="7.5" cy="7.5" r="2.5" fill="currentColor" />
              </svg>
            </Box>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem variant="blue" css={{ px: 4 }}>
            <Box css={{ color: 'gray500' }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" y="3.5" width="14" height="8" rx="4" stroke="currentColor" />
                <circle cx="10.5" cy="7.5" r="4" stroke="currentColor" />
              </svg>
            </Box>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem variant="blueHighlighted" css={{ px: 4, pl: 6 }}>
            <Box css={{ color: 'gray500' }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" y="3.5" width="14" height="8" rx="4" stroke="currentColor" />
                <circle cx="10.5" cy="7.5" r="4" stroke="currentColor" />
              </svg>
            </Box>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem variant="blueHighlighted" css={{ px: 4, pl: 8 }}>
            <Box css={{ color: 'gray500' }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" y="3.5" width="14" height="8" rx="4" stroke="currentColor" />
                <circle cx="10.5" cy="7.5" r="4" stroke="currentColor" />
              </svg>
            </Box>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem variant="blueHighlighted" css={{ px: 4, pl: 8 }}>
            <Box css={{ color: 'purple600' }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" y="3.5" width="14" height="8" rx="4" stroke="currentColor" />
                <circle cx="10.5" cy="7.5" r="4" stroke="currentColor" />
              </svg>
            </Box>
            <Text css={{ ml: 2, color: 'purple600' }}>Flex</Text>
          </TreeItem>
          <TreeItem variant="blueHighlighted" css={{ px: 4, pl: 8 }}>
            <Box css={{ color: 'purple600' }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" y="3.5" width="14" height="8" rx="4" stroke="currentColor" />
                <circle cx="10.5" cy="7.5" r="4" stroke="currentColor" />
              </svg>
            </Box>
            <Text css={{ ml: 2, color: 'purple600' }}>Flex</Text>
          </TreeItem>
          <TreeItem css={{ px: 4 }}>
            <Box css={{ color: 'gray500', mr: 2 }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" />
                <path
                  d="M9.5 5.5L6.83333 9.5L5.5 8.13736"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            Flex
          </TreeItem>
          <TreeItem css={{ px: 4, pl: 6 }}>
            <Box css={{ color: 'gray500', mr: 2 }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" />
                <path
                  d="M9.5 5.5L6.83333 9.5L5.5 8.13736"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            Flex
          </TreeItem>
          <TreeItem css={{ px: 4, pl: 8 }}>
            <Box css={{ color: 'gray500', mr: 2 }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" />
                <path
                  d="M9.5 5.5L6.83333 9.5L5.5 8.13736"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            Button
          </TreeItem>
          <TreeItem css={{ px: 4 }}>
            <Box css={{ color: 'gray500', mr: 2 }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" />
                <path
                  d="M9.5 5.5L6.83333 9.5L5.5 8.13736"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            Flex
          </TreeItem>
          <TreeItem css={{ px: 4 }}>
            <Box css={{ color: 'gray500', mr: 2 }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" />
                <path
                  d="M9.5 5.5L6.83333 9.5L5.5 8.13736"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            Flex
          </TreeItem>
          <TreeItem variant="purpleSelected" css={{ px: 4 }}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" />
              <path
                d="M9.5 5.5L6.83333 9.5L5.5 8.13736"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem variant="purpleHighlighted" css={{ px: 4, pl: 6 }}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" />
              <path
                d="M9.5 5.5L6.83333 9.5L5.5 8.13736"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem variant="purpleHighlighted" css={{ px: 4, pl: 8 }}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" />
              <path
                d="M9.5 5.5L6.83333 9.5L5.5 8.13736"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem variant="purpleHighlighted" css={{ px: 4, pl: 8 }}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" />
              <path
                d="M9.5 5.5L6.83333 9.5L5.5 8.13736"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem variant="purpleHighlighted" css={{ px: 4, pl: 8 }}>
            <Box css={{ color: 'purple600' }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" />
                <path
                  d="M9.5 5.5L6.83333 9.5L5.5 8.13736"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Text css={{ ml: 2, color: 'purple600' }}>Flex</Text>
          </TreeItem>
          <TreeItem css={{ px: 4 }}>
            <Box css={{ color: 'gray500' }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" />
                <path
                  d="M9.5 5.5L6.83333 9.5L5.5 8.13736"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem css={{ px: 4 }}>
            <Box css={{ color: 'gray500' }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" />
                <circle cx="7.5" cy="7.5" r="2.5" fill="currentColor" />
              </svg>
            </Box>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem css={{ px: 4 }}>
            <Box css={{ color: 'gray500' }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" y="3.5" width="14" height="8" rx="4" stroke="currentColor" />
                <circle cx="10.5" cy="7.5" r="4" stroke="currentColor" />
              </svg>
            </Box>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem css={{ px: 4 }}>
            <Box css={{ color: 'gray500' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M3.5 5.5L1.5 7.5L3.5 9.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.5 5.5L13.5 7.5L11.5 9.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L5.03576 12.3143ZM9.96424 2.6857C10.0668 2.4293 9.94209 2.13832 9.6857 2.03576C9.4293 1.9332 9.13832 2.05791 9.03576 2.3143L9.96424 2.6857ZM5.96424 12.6857L9.96424 2.6857L9.03576 2.3143L5.03576 12.3143L5.96424 12.6857Z"
                  fill="currentColor"
                />
              </svg>
            </Box>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem variant="yellowSelected" css={{ px: 4 }}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" />
              <path
                d="M9.5 5.5L6.83333 9.5L5.5 8.13736"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem variant="yellowHighlighted" css={{ px: 4, pl: 6 }}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" />
              <path
                d="M9.5 5.5L6.83333 9.5L5.5 8.13736"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem variant="yellowHighlighted" css={{ px: 4, pl: 8 }}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" />
              <path
                d="M9.5 5.5L6.83333 9.5L5.5 8.13736"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem variant="yellowHighlighted" css={{ px: 4, pl: 8 }}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" />
              <path
                d="M9.5 5.5L6.83333 9.5L5.5 8.13736"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem variant="yellowHighlighted" css={{ px: 4, pl: 8 }}>
            <Box css={{ color: 'purple600' }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" />
                <path
                  d="M9.5 5.5L6.83333 9.5L5.5 8.13736"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Text css={{ ml: 2, color: 'purple600' }}>Flex</Text>
          </TreeItem>
          <TreeItem css={{ px: 4 }}>
            <Box css={{ color: 'gray500' }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" />
                <path
                  d="M9.5 5.5L6.83333 9.5L5.5 8.13736"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem css={{ px: 4 }}>
            <Box css={{ color: 'purple600' }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" />
                <circle cx="7.5" cy="7.5" r="2.5" fill="currentColor" />
              </svg>
            </Box>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem css={{ px: 4 }}>
            <Box css={{ color: 'purple600' }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" y="3.5" width="14" height="8" rx="4" stroke="currentColor" />
                <circle cx="10.5" cy="7.5" r="4" stroke="currentColor" />
              </svg>
            </Box>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem css={{ px: 4 }}>
            <Box css={{ color: 'purple600' }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="3" stroke="currentColor" />
                <path d="M0.5 7.5H4.5" stroke="currentColor" strokeLinecap="round" />
                <path d="M10.5 7.5H14.5" stroke="currentColor" strokeLinecap="round" />
              </svg>
            </Box>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
          <TreeItem css={{ px: 4 }}>
            <Box css={{ color: 'purple600' }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 4.5V2.5H2.5V4.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.5 12.5H10.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 12.5V2.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Text css={{ ml: 2, color: 'inherit' }}>Flex</Text>
          </TreeItem>
        </Box>
        <Box css={{ backgroundColor: 'canvas', height: '100vh', width: '100vw' }}></Box>
        <Box
          css={{
            position: 'absolute',
            top: '46px',
            right: 0,
            bottom: 0,
            width: '250px',
            flexShrink: 0,
            backgroundColor: 'loContrast',
            borderLeftWidth: '1px',
            borderLeftStyle: 'solid',
            borderColor: 'canvas',
            p: 3,
          }}
        >
          <Box css={{ mb: 3 }}>
            <Input placeholder="This is an input" cursor="default" />
          </Box>
          <Box css={{ mb: 3 }}>
            <Input size="large" placeholder="This is a large input" />
          </Box>
          <Box css={{ mb: 3 }}>
            <Input variant="ghost" placeholder="This is a ghost input" />
          </Box>
          <Card css={{ p: 3 }}>
            <Text as="p" size="2" css={{ lineHeight: '20px', mb: 1 }}>
              If possible, we should revert to our older syntax with a separate variant block.
            </Text>
            <Text as="p" size="2" css={{ lineHeight: '20px', color: 'gray600', mb: 2 }}>
              The current variant syntax is very confusing in long files.
            </Text>
            <Button>
              <Box css={{ mr: '1' }}>
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
                    d="M8 3C8 2.72386 7.77614 2.5 7.5 2.5C7.22386 2.5 7 2.72386 7 3V7H3C2.72386 7 2.5 7.22386 2.5 7.5C2.5 7.77614 2.72386 8 3 8H7V12C7 12.2761 7.22386 12.5 7.5 12.5C7.77614 12.5 8 12.2761 8 12V8H12C12.2761 8 12.5 7.77614 12.5 7.5C12.5 7.22386 12.2761 7 12 7H8V3Z"
                    fill="currentColor"
                  />
                </svg>
              </Box>
              Button
            </Button>
          </Card>
          <Text as="p" size="3" css={{ lineHeight: '20px', color: 'blue600', my: 6 }}>
            This is a link
          </Text>
        </Box>
      </Flex>

      <Box
        css={{
          position: 'absolute',
          top: '200px',
          left: '800px',
          bottom: 0,
          width: '375px',
          backgroundColor: 'white',
          height: '667px',
        }}
      ></Box>

      <Box
        css={{
          position: 'absolute',
          top: '400px',
          left: '1400px',
          bottom: 0,
          width: '160px',
          height: '250px',
          backgroundColor: 'loContrast',
          borderRadius: 2,
          boxShadow:
            '0 0.4px 0px -10px rgba(0, 0, 0, 0.043), 0 0.9px 0.3px -10px rgba(0, 0, 0, 0.063), 0 1.6px 0.8px -10px rgba(0, 0, 0, 0.077), 0 2.5px 1.8px -10px rgba(0, 0, 0, 0.09), 0 3.9px 3.5px -10px rgba(0, 0, 0, 0.103), 0 6px 6.6px -10px rgba(0, 0, 0, 0.117), 0 10px 13.5px -10px rgba(0, 0, 0, 0.137), 0 20px 35px -10px rgba(0, 0, 0, 0.18)',
        }}
      ></Box>
    </Box>
  );
}

export default Home;
