import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { IconButton } from '../components/IconButton';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { MenuItem } from '../components/MenuItem';
import { Text } from '../components/Text';
import { ScrollArea } from '../components/Scrollbar';

export function Properties() {
  return (
    <Box css={{ position: 'fixed', top: '0', right: '0', bottom: '0', width: "250px", borderLeft: '1px solid $gray500' }}>
      <ScrollArea>
        <Box css={{ pb: '$9' }}>

          <Box css={{ borderTop: '1px solid $gray300', py: '$1' }}>
            <Flex css={{ px: '$3', my: '$1', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box>
                <Text size="1" css={{ fontWeight: '500' }}>Layout</Text>
              </Box>
              <Box css={{ mr: '-$1' }}>
                <IconButton variant="ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8 2.72386 7.77614 2.5 7.5 2.5C7.22386 2.5 7 2.72386 7 3V7H3C2.72386 7 2.5 7.22386 2.5 7.5C2.5 7.77614 2.72386 8 3 8H7V12C7 12.2761 7.22386 12.5 7.5 12.5C7.77614 12.5 8 12.2761 8 12V8H12C12.2761 8 12.5 7.77614 12.5 7.5C12.5 7.22386 12.2761 7 12 7H8V3Z" fill="#282B2E"/>
                  </svg>
                </IconButton>
              </Box>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Width</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Height</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Min. Width</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Max. Width</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Min. Height</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Max. Height</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Padding</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Padding X</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Padding Y</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Padding Top</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Padding Right</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Padding Bottom</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Padding Left</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Overflow</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Select css={{ width: '100%' }}>
                    <option value="option1" label="Visible">fewfew</option>
                    <option value="option2" label="Hidden">fewfew</option>
                  </Select>
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
          </Box>









          <Box css={{ borderTop: '1px solid $gray500', py: '$1' }}>
            <Flex css={{ px: '$3', my: '$1', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box>
                <Text size="1" css={{ fontWeight: '500' }}>Text</Text>
              </Box>
              <Box css={{ mr: '-$1' }}>
                <IconButton variant="ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8 2.72386 7.77614 2.5 7.5 2.5C7.22386 2.5 7 2.72386 7 3V7H3C2.72386 7 2.5 7.22386 2.5 7.5C2.5 7.77614 2.72386 8 3 8H7V12C7 12.2761 7.22386 12.5 7.5 12.5C7.77614 12.5 8 12.2761 8 12V8H12C12.2761 8 12.5 7.77614 12.5 7.5C12.5 7.22386 12.2761 7 12 7H8V3Z" fill="#282B2E"/>
                  </svg>
                </IconButton>
              </Box>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Typeface</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Select css={{ width: '100%' }}>
                    <option value="option1" label="Untitled"></option>
                    <option value="option2" label="Repeat X"></option>
                    <option value="option3" label="Repeat Y"></option>
                  </Select>
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Size</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="16" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Style</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Select css={{ width: '100%' }}>
                    <option value="option1" label="Normal"></option>
                    <option value="option2" label="Italic"></option>
                    <option value="option3" label="Medium"></option>
                    <option value="option3" label="Bold"></option>
                    <option value="option3" label="Bold Italic"></option>
                  </Select>
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Color</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box>
                  <IconButton variant="ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <rect width="3" height="3" fill="#C4C4C4"/>
                      <rect x="6" width="3" height="3" fill="#C4C4C4"/>
                      <rect x="12" width="3" height="3" fill="#C4C4C4"/>
                      <rect x="3" y="3" width="3" height="3" fill="#C4C4C4"/>
                      <rect x="9" y="3" width="3" height="3" fill="#C4C4C4"/>
                      <rect width="3" height="3" fill="#C4C4C4"/>
                      <rect x="6" width="3" height="3" fill="#C4C4C4"/>
                      <rect x="12" width="3" height="3" fill="#C4C4C4"/>
                      <rect y="12" width="3" height="3" fill="#C4C4C4"/>
                      <rect x="6" y="12" width="3" height="3" fill="#C4C4C4"/>
                      <rect x="12" y="12" width="3" height="3" fill="#C4C4C4"/>
                      <rect y="12" width="3" height="3" fill="#C4C4C4"/>
                      <rect x="6" y="12" width="3" height="3" fill="#C4C4C4"/>
                      <rect x="12" y="12" width="3" height="3" fill="#C4C4C4"/>
                      <rect x="3" y="3" width="3" height="3" fill="#C4C4C4"/>
                      <rect x="9" y="3" width="3" height="3" fill="#C4C4C4"/>
                      <rect y="6" width="3" height="3" fill="#C4C4C4"/>
                      <rect x="6" y="6" width="3" height="3" fill="#C4C4C4"/>
                      <rect x="12" y="6" width="3" height="3" fill="#C4C4C4"/>
                      <rect x="3" y="9" width="3" height="3" fill="#C4C4C4"/>
                      <rect x="9" y="9" width="3" height="3" fill="#C4C4C4"/>
                      <rect y="6" width="3" height="3" fill="#C4C4C4"/>
                      <rect x="6" y="6" width="3" height="3" fill="#C4C4C4"/>
                      <rect x="12" y="6" width="3" height="3" fill="#C4C4C4"/>
                      <rect x="3" y="9" width="3" height="3" fill="#C4C4C4"/>
                      <rect x="9" y="9" width="3" height="3" fill="#C4C4C4"/>
                    </svg>
                  </IconButton>
                </Box>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="b5b5b5" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Line Height</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="1" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Tracking</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Case</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Select css={{ width: '100%' }}>
                    <option value="option1" label="As Typed"></option>
                    <option value="option2" label="Lowercase"></option>
                    <option value="option3" label="Uppercase"></option>
                    <option value="option3" label="Capitalized"></option>
                  </Select>
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
          </Box>













          <Box css={{ borderTop: '1px solid $gray500', py: '$1' }}>
            <Flex css={{ px: '$3', my: '$1', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box>
                <Text size="1" css={{ fontWeight: '500' }}>Shadow</Text>
              </Box>
              <Box css={{ mr: '-$1' }}>
                <IconButton variant="ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8 2.72386 7.77614 2.5 7.5 2.5C7.22386 2.5 7 2.72386 7 3V7H3C2.72386 7 2.5 7.22386 2.5 7.5C2.5 7.77614 2.72386 8 3 8H7V12C7 12.2761 7.22386 12.5 7.5 12.5C7.77614 12.5 8 12.2761 8 12V8H12C12.2761 8 12.5 7.77614 12.5 7.5C12.5 7.22386 12.2761 7 12 7H8V3Z" fill="#282B2E"/>
                  </svg>
                </IconButton>
              </Box>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ mr: '$1', ml: '-$1' }}>
                <IconButton variant="ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <rect width="3" height="3" fill="#C4C4C4"/>
                    <rect x="6" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="12" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="3" y="3" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="9" y="3" width="3" height="3" fill="#C4C4C4"/>
                    <rect width="3" height="3" fill="#C4C4C4"/>
                    <rect x="6" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="12" width="3" height="3" fill="#C4C4C4"/>
                    <rect y="12" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="6" y="12" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="12" y="12" width="3" height="3" fill="#C4C4C4"/>
                    <rect y="12" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="6" y="12" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="12" y="12" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="3" y="3" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="9" y="3" width="3" height="3" fill="#C4C4C4"/>
                    <rect y="6" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="6" y="6" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="12" y="6" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="3" y="9" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="9" y="9" width="3" height="3" fill="#C4C4C4"/>
                    <rect y="6" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="6" y="6" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="12" y="6" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="3" y="9" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="9" y="9" width="3" height="3" fill="#C4C4C4"/>
                  </svg>
                </IconButton>
              </Box>
              <Box css={{ mr: '$1', ml: '-$1' }}>
                <IconButton variant="ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.49988 1.12704C3.98027 1.12704 1.12705 3.98026 1.12705 7.49988C1.12705 11.0195 3.98027 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98026 11.0195 1.12704 7.49988 1.12704ZM2.07705 7.49988C2.07705 4.50493 4.50494 2.07704 7.49988 2.07704C10.4948 2.07704 12.9227 4.50493 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50494 12.9227 2.07705 10.4948 2.07705 7.49988ZM7.5 3.1C7.27908 3.1 7.1 3.27909 7.1 3.5C7.1 3.72091 7.27908 3.9 7.5 3.9H8.8975C9.11841 3.9 9.2975 3.72091 9.2975 3.5C9.2975 3.27909 9.11841 3.1 8.8975 3.1H7.5ZM7.5 5.1C7.27908 5.1 7.1 5.27909 7.1 5.5C7.1 5.72091 7.27908 5.9 7.5 5.9H10.65C10.8709 5.9 11.05 5.72091 11.05 5.5C11.05 5.27909 10.8709 5.1 10.65 5.1H7.5ZM7.5 7.1C7.27908 7.1 7.1 7.27909 7.1 7.5C7.1 7.72091 7.27908 7.9 7.5 7.9H11.7C11.9209 7.9 12.1 7.72091 12.1 7.5C12.1 7.27909 11.9209 7.1 11.7 7.1H7.5ZM7.5 9.1C7.27908 9.1 7.1 9.27909 7.1 9.5C7.1 9.72091 7.27908 9.9 7.5 9.9H10.65C10.8709 9.9 11.05 9.72091 11.05 9.5C11.05 9.27909 10.8709 9.1 10.65 9.1H7.5ZM7.5 11.1C7.27908 11.1 7.1 11.2791 7.1 11.5C7.1 11.7209 7.27908 11.9 7.5 11.9H8.8975C9.11841 11.9 9.2975 11.7209 9.2975 11.5C9.2975 11.2791 9.11841 11.1 8.8975 11.1H7.5Z" fill="#282B2E"/>
                  </svg>
                </IconButton>
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Input size="1" cursor="default" value="0" css={{ borderTopRightRadius: 0, borderBottomRightRadius: 0, width: 'calc(100% + 1px)' }} />
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Input size="1" cursor="default" value="0" css={{ borderRadius: 0, width: 'calc(100% + 1px)' }} />
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Input size="1" cursor="default" value="0" css={{ borderRadius: 0, width: 'calc(100% + 1px)' }} />
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Input size="1" cursor="default" value="0" css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
              </Box>
              <Box css={{ ml: '$1', mr: '-$1' }}>
                <IconButton variant="ghost">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                  </svg>
                </IconButton>
              </Box>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ mr: '$1', ml: '-$1' }}>
                <IconButton variant="ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <rect width="3" height="3" fill="#C4C4C4"/>
                    <rect x="6" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="12" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="3" y="3" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="9" y="3" width="3" height="3" fill="#C4C4C4"/>
                    <rect width="3" height="3" fill="#C4C4C4"/>
                    <rect x="6" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="12" width="3" height="3" fill="#C4C4C4"/>
                    <rect y="12" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="6" y="12" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="12" y="12" width="3" height="3" fill="#C4C4C4"/>
                    <rect y="12" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="6" y="12" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="12" y="12" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="3" y="3" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="9" y="3" width="3" height="3" fill="#C4C4C4"/>
                    <rect y="6" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="6" y="6" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="12" y="6" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="3" y="9" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="9" y="9" width="3" height="3" fill="#C4C4C4"/>
                    <rect y="6" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="6" y="6" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="12" y="6" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="3" y="9" width="3" height="3" fill="#C4C4C4"/>
                    <rect x="9" y="9" width="3" height="3" fill="#C4C4C4"/>
                  </svg>
                </IconButton>
              </Box>
              <Box css={{ mr: '$1', ml: '-$1' }}>
                <IconButton variant="ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.49988 1.12704C3.98027 1.12704 1.12705 3.98026 1.12705 7.49988C1.12705 11.0195 3.98027 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98026 11.0195 1.12704 7.49988 1.12704ZM2.07705 7.49988C2.07705 4.50493 4.50494 2.07704 7.49988 2.07704C10.4948 2.07704 12.9227 4.50493 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50494 12.9227 2.07705 10.4948 2.07705 7.49988ZM7.5 3.1C7.27908 3.1 7.1 3.27909 7.1 3.5C7.1 3.72091 7.27908 3.9 7.5 3.9H8.8975C9.11841 3.9 9.2975 3.72091 9.2975 3.5C9.2975 3.27909 9.11841 3.1 8.8975 3.1H7.5ZM7.5 5.1C7.27908 5.1 7.1 5.27909 7.1 5.5C7.1 5.72091 7.27908 5.9 7.5 5.9H10.65C10.8709 5.9 11.05 5.72091 11.05 5.5C11.05 5.27909 10.8709 5.1 10.65 5.1H7.5ZM7.5 7.1C7.27908 7.1 7.1 7.27909 7.1 7.5C7.1 7.72091 7.27908 7.9 7.5 7.9H11.7C11.9209 7.9 12.1 7.72091 12.1 7.5C12.1 7.27909 11.9209 7.1 11.7 7.1H7.5ZM7.5 9.1C7.27908 9.1 7.1 9.27909 7.1 9.5C7.1 9.72091 7.27908 9.9 7.5 9.9H10.65C10.8709 9.9 11.05 9.72091 11.05 9.5C11.05 9.27909 10.8709 9.1 10.65 9.1H7.5ZM7.5 11.1C7.27908 11.1 7.1 11.2791 7.1 11.5C7.1 11.7209 7.27908 11.9 7.5 11.9H8.8975C9.11841 11.9 9.2975 11.7209 9.2975 11.5C9.2975 11.2791 9.11841 11.1 8.8975 11.1H7.5Z" fill="#282B2E"/>
                  </svg>
                </IconButton>
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Input size="1" cursor="default" value="0" css={{ borderTopRightRadius: 0, borderBottomRightRadius: 0, width: 'calc(100% + 1px)' }} />
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Input size="1" cursor="default" value="0" css={{ borderRadius: 0, width: 'calc(100% + 1px)' }} />
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Input size="1" cursor="default" value="0" css={{ borderRadius: 0, width: 'calc(100% + 1px)' }} />
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Input size="1" cursor="default" value="0" css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
              </Box>
              <Box css={{ ml: '$1', mr: '-$1' }}>
                <IconButton variant="ghost">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                  </svg>
                </IconButton>
              </Box>
            </Flex>
            <Flex css={{ pl: '68px', pr: '40px', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                {/* <Tooltip label="X Offset" side="bottom" align="center"> */}
                  <Text size="1" css={{ color: '$gray900', display: 'block', textAlign: 'center' }} style={{ lineHeight: 1 }}>X</Text>
                {/* </Tooltip> */}
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                {/* <Tooltip label="Y Offset" side="bottom" align="center"> */}
                  <Text size="1" css={{ color: '$gray900', display: 'block', textAlign: 'center' }} style={{ lineHeight: 1 }}>Y</Text>
                {/* </Tooltip> */}
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                {/* <Tooltip label="Blur" side="bottom" align="center"> */}
                  <Text size="1" css={{ color: '$gray900', display: 'block', textAlign: 'center' }} style={{ lineHeight: 1 }}>B</Text>
                {/* </Tooltip> */}
              </Box>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                {/* <Tooltip label="Spread" side="bottom" align="center"> */}
                  <Text size="1" css={{ color: '$gray900', display: 'block', textAlign: 'center' }} style={{ lineHeight: 1 }}>S</Text>
                {/* </Tooltip> */}
              </Box>
            </Flex>
          </Box>







          <Box css={{ borderTop: '1px solid $gray500', py: '$1' }}>
            <Flex css={{ px: '$3', my: '$1', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box>
                <Text size="1" css={{ fontWeight: '500' }}>Filter</Text>
              </Box>
              <Box css={{ mr: '-$1' }}>
                <IconButton variant="ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8 2.72386 7.77614 2.5 7.5 2.5C7.22386 2.5 7 2.72386 7 3V7H3C2.72386 7 2.5 7.22386 2.5 7.5C2.5 7.77614 2.72386 8 3 8H7V12C7 12.2761 7.22386 12.5 7.5 12.5C7.77614 12.5 8 12.2761 8 12V8H12C12.2761 8 12.5 7.77614 12.5 7.5C12.5 7.22386 12.2761 7 12 7H8V3Z" fill="#282B2E"/>
                  </svg>
                </IconButton>
              </Box>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ mr: '$1', ml: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 9C3 6.5 4.5 4.25 7.5 1.5C10.5 4.25 12 6.5 12 9C12 11.4853 9.98528 13.5 7.5 13.5C5.01472 13.5 3 11.4853 3 9ZM10.9524 8.30307C9.67347 7.82121 8.2879 8.46208 6.98956 9.06259C5.9327 9.55142 4.93365 10.0135 4.09695 9.82153C4.03357 9.55804 4 9.28294 4 9C4 7.11203 5.02686 5.27195 7.5 2.87357C9.66837 4.97639 10.725 6.65004 10.9524 8.30307Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
                <Box css={{ flexGrow: '1' }}>
                  <Select css={{ width: 'calc(100% + 1px)', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                    <option value="option1" label="Brightness">Brightness</option>
                    <option value="option2" label="Brightness">Brightness</option>
                    <option value="option3" label="Brightness">Brightness</option>
                  </Select>
                </Box>
              </Flex>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="5" css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ mr: '$1', ml: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 9C3 6.5 4.5 4.25 7.5 1.5C10.5 4.25 12 6.5 12 9C12 11.4853 9.98528 13.5 7.5 13.5C5.01472 13.5 3 11.4853 3 9ZM10.9524 8.30307C9.67347 7.82121 8.2879 8.46208 6.98956 9.06259C5.9327 9.55142 4.93365 10.0135 4.09695 9.82153C4.03357 9.55804 4 9.28294 4 9C4 7.11203 5.02686 5.27195 7.5 2.87357C9.66837 4.97639 10.725 6.65004 10.9524 8.30307Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
                <Box css={{ flexGrow: '1' }}>
                  <Select css={{ width: 'calc(100% + 1px)', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                    <option value="option1" label="Brightness">Brightness</option>
                    <option value="option2" label="Blur">Blur</option>
                    <option value="option3" label="Blur">Blur</option>
                  </Select>
                </Box>
              </Flex>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="100%" css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
          </Box>
















          <Box css={{ borderTop: '1px solid $gray500', py: '$1' }}>
            <Flex css={{ px: '$3', my: '$1', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box>
                <Text size="1" css={{ fontWeight: '500' }}>Transform</Text>
              </Box>
              <Box css={{ mr: '-$1' }}>
                <IconButton variant="ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8 2.72386 7.77614 2.5 7.5 2.5C7.22386 2.5 7 2.72386 7 3V7H3C2.72386 7 2.5 7.22386 2.5 7.5C2.5 7.77614 2.72386 8 3 8H7V12C7 12.2761 7.22386 12.5 7.5 12.5C7.77614 12.5 8 12.2761 8 12V8H12C12.2761 8 12.5 7.77614 12.5 7.5C12.5 7.22386 12.2761 7 12 7H8V3Z" fill="#282B2E"/>
                  </svg>
                </IconButton>
              </Box>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Select css={{ width: 'calc(100% + 1px)', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                  <option value="option1" label="Rotate"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0°" css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Select css={{ width: 'calc(100% + 1px)', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                  <option value="option1" label="Rotate X"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0°" css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Select css={{ width: 'calc(100% + 1px)', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                  <option value="option1" label="Rotate Y"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0°" css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Select css={{ width: 'calc(100% + 1px)', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                  <option value="option1" label="Rotate Z"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0°" css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Select css={{ width: 'calc(100% + 1px)', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                  <option value="option1" label="Scale"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="100%" css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Select css={{ width: 'calc(100% + 1px)', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                  <option value="option1" label="Scale X"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="100%" css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Select css={{ width: 'calc(100% + 1px)', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                  <option value="option1" label="Scale Y"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="100%" css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Select css={{ width: 'calc(100% + 1px)', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                  <option value="option1" label="Scale Z"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="100%" css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Select css={{ width: 'calc(100% + 1px)', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                  <option value="option1" label="Skew X"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0°" css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Select css={{ width: 'calc(100% + 1px)', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                  <option value="option1" label="Skew Y"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0°" css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Select css={{ width: 'calc(100% + 1px)', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                  <option value="option1" label="Translate X"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0" css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Select css={{ width: 'calc(100% + 1px)', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                  <option value="option1" label="Translate Y"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0" css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Select css={{ width: 'calc(100% + 1px)', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                  <option value="option1" label="Translate Z"></option>
                  <option value="option2" label="Repeat X"></option>
                  <option value="option3" label="Repeat Y"></option>
                </Select>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0" css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Origin</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Select css={{ width: '100%'}}>
                    <option value="option1" label="Center"></option>
                    <option value="option2" label="Top"></option>
                    <option value="option3" label="Right"></option>
                    <option value="option3" label="Bottom"></option>
                    <option value="option3" label="Left"></option>
                    <option value="option1" label="Top Right"></option>
                    <option value="option2" label="Bottom Right"></option>
                    <option value="option3" label="Bottom Left"></option>
                    <option value="option3" label="Top Left"></option>
                  </Select>
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ ai: 'center', px: '$3', py: '$1' }}>
              <Box css={{ flexBasis: '0', flexGrow: '1' }}>
                <Text size="1">Perspective</Text>
              </Box>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="0°" />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
          </Box>

          










          <Box css={{ borderTop: '1px solid $gray500', py: '$1' }}>
            <Flex css={{ px: '$3', my: '$1', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box>
                <Text size="1" css={{ fontWeight: '500' }}>Transition</Text>
              </Box>
              <Box css={{ mr: '-$1' }}>
                <IconButton variant="ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8 2.72386 7.77614 2.5 7.5 2.5C7.22386 2.5 7 2.72386 7 3V7H3C2.72386 7 2.5 7.22386 2.5 7.5C2.5 7.77614 2.72386 8 3 8H7V12C7 12.2761 7.22386 12.5 7.5 12.5C7.77614 12.5 8 12.2761 8 12V8H12C12.2761 8 12.5 7.77614 12.5 7.5C12.5 7.22386 12.2761 7 12 7H8V3Z" fill="#282B2E"/>
                  </svg>
                </IconButton>
              </Box>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ mr: '$1', ml: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1.5C5 1.22386 4.77614 1 4.5 1C4.22386 1 4 1.22386 4 1.5L4 7C4 7.01671 4.00082 7.03323 4.00242 7.04952C2.86009 7.28022 2 8.28967 2 9.5C2 10.7103 2.86009 11.7198 4.00242 11.9505C4.00082 11.9668 4 11.9833 4 12V13.5C4 13.7761 4.22386 14 4.5 14C4.77614 14 5 13.7761 5 13.5V12C5 11.9833 4.99918 11.9668 4.99758 11.9505C6.1399 11.7198 7 10.7103 7 9.5C7 8.28967 6.1399 7.28022 4.99758 7.04952C4.99918 7.03323 5 7.01671 5 7L5 1.5ZM11 1.5C11 1.22386 10.7761 1 10.5 1C10.2239 1 10 1.22386 10 1.5V3C10 3.01671 10.0008 3.03323 10.0024 3.04952C8.8601 3.28022 8 4.28967 8 5.5C8 6.71033 8.8601 7.71978 10.0024 7.95048C10.0008 7.96677 10 7.98329 10 8V13.5C10 13.7761 10.2239 14 10.5 14C10.7761 14 11 13.7761 11 13.5V8C11 7.98329 10.9992 7.96677 10.9976 7.95048C12.1399 7.71978 13 6.71033 13 5.5C13 4.28967 12.1399 3.28022 10.9976 3.04952C10.9992 3.03323 11 3.01671 11 3V1.5ZM4.5 8C3.67157 8 3 8.67157 3 9.5C3 10.3284 3.67157 11 4.5 11C5.32843 11 6 10.3284 6 9.5C6 8.67157 5.32843 8 4.5 8ZM9 5.5C9 4.67157 9.67157 4 10.5 4C11.3284 4 12 4.67157 12 5.5C12 6.32843 11.3284 7 10.5 7C9.67157 7 9 6.32843 9 5.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
                <Box css={{ flexGrow: '1' }}>
                  <Select css={{ width: 'calc(100% + 1px)', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                    <option value="option1" label="Fill"></option>
                    <option value="option2" label="Repeat X"></option>
                    <option value="option3" label="Repeat Y"></option>
                  </Select>
                </Box>
              </Flex>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="100ms" css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
            <Flex css={{ px: '$3', py: '$1' }}>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ mr: '$1', ml: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1.5C5 1.22386 4.77614 1 4.5 1C4.22386 1 4 1.22386 4 1.5L4 7C4 7.01671 4.00082 7.03323 4.00242 7.04952C2.86009 7.28022 2 8.28967 2 9.5C2 10.7103 2.86009 11.7198 4.00242 11.9505C4.00082 11.9668 4 11.9833 4 12V13.5C4 13.7761 4.22386 14 4.5 14C4.77614 14 5 13.7761 5 13.5V12C5 11.9833 4.99918 11.9668 4.99758 11.9505C6.1399 11.7198 7 10.7103 7 9.5C7 8.28967 6.1399 7.28022 4.99758 7.04952C4.99918 7.03323 5 7.01671 5 7L5 1.5ZM11 1.5C11 1.22386 10.7761 1 10.5 1C10.2239 1 10 1.22386 10 1.5V3C10 3.01671 10.0008 3.03323 10.0024 3.04952C8.8601 3.28022 8 4.28967 8 5.5C8 6.71033 8.8601 7.71978 10.0024 7.95048C10.0008 7.96677 10 7.98329 10 8V13.5C10 13.7761 10.2239 14 10.5 14C10.7761 14 11 13.7761 11 13.5V8C11 7.98329 10.9992 7.96677 10.9976 7.95048C12.1399 7.71978 13 6.71033 13 5.5C13 4.28967 12.1399 3.28022 10.9976 3.04952C10.9992 3.03323 11 3.01671 11 3V1.5ZM4.5 8C3.67157 8 3 8.67157 3 9.5C3 10.3284 3.67157 11 4.5 11C5.32843 11 6 10.3284 6 9.5C6 8.67157 5.32843 8 4.5 8ZM9 5.5C9 4.67157 9.67157 4 10.5 4C11.3284 4 12 4.67157 12 5.5C12 6.32843 11.3284 7 10.5 7C9.67157 7 9 6.32843 9 5.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
                <Box css={{ flexGrow: '1' }}>
                  <Select css={{ width: 'calc(100% + 1px)', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                    <option value="option1" label="Transform"></option>
                    <option value="option2" label="Repeat X"></option>
                    <option value="option3" label="Repeat Y"></option>
                  </Select>
                </Box>
              </Flex>
              <Flex css={{ flexBasis: '0', flexGrow: '1' }}>
                <Box css={{ flexGrow: '1' }}>
                  <Input size="1" cursor="default" value="100ms" css={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
                </Box>
                <Box css={{ ml: '$1', mr: '-$1' }}>
                  <IconButton variant="ghost">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z" fill="#282B2E"/>
                    </svg>
                  </IconButton>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Box>







      </ScrollArea>
    </Box>
  );
}