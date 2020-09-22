import { Box } from '../components/Box';
import { MenuItem } from '../components/MenuItem';
import { Text } from '../components/Text';
import { ScrollArea } from '../components/Scrollbar';

export function Properties() {
  return (
    <Box css={{ position: 'fixed', top: '0', right: '0', bottom: '0', width: 250, borderLeft: '1px solid $gray500', py: '$1' }}>
      <ScrollArea>
        <Text size={1}>Properties</Text>
      </ScrollArea>
    </Box>
  );
}