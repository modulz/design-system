import { styled, StitchesProps } from '../stitches.config';
import { ImprovedFlex } from './ImprovedFlex';
import { flexGapSupported } from './flexGapSupported';

export type FlexProps = StitchesProps<typeof _Flex>;

export const _Flex = styled('div', {
  // Reset
  boxSizing: 'border-box',

  // Custom
  display: 'flex',
});

export const Flex = ImprovedFlex;
