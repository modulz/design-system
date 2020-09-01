import { styled } from '../css';

export const Card = styled.div({
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,

  // Custom
  border: '1px solid $gray400',
  borderRadius: '$2',
});
