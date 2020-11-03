import { styled, StitchesProps } from '../stitches.config';

export type FlexProps = StitchesProps<typeof Flex>;

export const Flex = styled('div', {
  // Reset
  boxSizing: 'border-box',

  // Custom
  display: 'flex',
});
