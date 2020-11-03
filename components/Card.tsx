import { styled, StitchesProps } from '../stitches.config';

export type CardProps = StitchesProps<typeof Card>;

export const Card = styled('div', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,

  // Custom
  border: '1px solid $gray400',
  borderRadius: '$2',
});
