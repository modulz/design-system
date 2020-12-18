import { Box } from '../components/Box';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { Kbd } from '../components/Kbd';
import { Section } from '../components/Section';
import { Subheading } from '../components/Subheading';

export function Kbds() {
  return (
    <Section size="3">
      <Container size="2">
        <Subheading>Kbd</Subheading>

        <Grid css={{ gridTemplateColumns: 'repeat(3, 1fr)', my: '$5' }}>
          <Box>
            <Flex css={{ mb: '$5' }}>
              <Kbd size="1">I</Kbd>
              <Kbd size="1">A</Kbd>
              <Kbd size="1">W</Kbd>
            </Flex>
            <Flex css={{ mb: '$5' }}>
              <Kbd size="1">⇧</Kbd>
              <Kbd size="1">⌘</Kbd>
              <Kbd size="1">W</Kbd>
            </Flex>
            <Flex css={{ mb: '$5' }}>
              <Kbd size="1">⌘ + Tab</Kbd>
            </Flex>
            <Flex css={{ mb: '$5' }}>
              <Kbd size="1" width="command">
                ⌘
              </Kbd>
              <Kbd size="1">Tab</Kbd>
            </Flex>
            <Flex css={{ mb: '$5' }}>
              <Kbd size="1" width="shift">
                ⇧
              </Kbd>
              <Kbd size="1">↑</Kbd>
            </Flex>
            <Flex css={{ mb: '$5' }}>
              <Kbd size="1" width="shift">
                ⇧
              </Kbd>
              <Kbd size="1">Tab</Kbd>
            </Flex>
            <Flex css={{ mb: '$5' }}>
              <Kbd size="1" width="space">
                Space
              </Kbd>
            </Flex>
          </Box>
          <Box>
            <Flex css={{ mb: '$5' }}>
              <Kbd>I</Kbd>
              <Kbd>A</Kbd>
              <Kbd>W</Kbd>
            </Flex>
            <Flex css={{ mb: '$5' }}>
              <Kbd>⇧</Kbd>
              <Kbd>⌘</Kbd>
              <Kbd>A</Kbd>
            </Flex>
            <Flex css={{ mb: '$5' }}>
              <Kbd>⌘ + Tab</Kbd>
            </Flex>
            <Flex css={{ mb: '$5' }}>
              <Kbd width="command">⌘</Kbd>
              <Kbd>Tab</Kbd>
            </Flex>
            <Flex css={{ mb: '$5' }}>
              <Kbd width="shift">⇧</Kbd>
              <Kbd>↑</Kbd>
            </Flex>
            <Flex css={{ mb: '$5' }}>
              <Kbd width="shift">⇧</Kbd>
              <Kbd>Tab</Kbd>
            </Flex>
            <Flex css={{ mb: '$5' }}>
              <Kbd width="space">Space</Kbd>
            </Flex>
          </Box>
          <Box>
            <Flex css={{ mb: '$5' }}>
              <Kbd>Space</Kbd>
            </Flex>
            <Flex css={{ mb: '$5' }}>
              <Kbd>Enter</Kbd>
            </Flex>
            <Flex css={{ mb: '$5' }}>
              <Kbd>Tab</Kbd>
            </Flex>
            <Flex css={{ mb: '$5' }}>
              <Kbd>Shift + Tab</Kbd>
            </Flex>
            <Flex css={{ mb: '$5' }}>
              <Kbd>Esc</Kbd>
            </Flex>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
}
