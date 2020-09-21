import { styled } from '../stitches.config';

export const Separator = styled.div({
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,

  height: '1px',
  backgroundColor: '$gray500',
  borderRadius: '$1',
  width: '$3',

  variants: {
    size: {
      1: {
        width: '$3',
      },
      2: {
        width: '$7',
      },
    },
    orientation: {
      vertical: {
        width: '1px',
        height: '$3',
      },
    },
  },
});
