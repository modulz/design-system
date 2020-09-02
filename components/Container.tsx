import { styled } from '../stitches.config';

export const Container = styled.div({
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,

  // Custom
  ml: 'auto',
  mr: 'auto',
  px: '$5',

  variants: {
    size: {
      '1': {
        maxWidth: '300px',
      },
      '2': {
        maxWidth: '585px',
      },
      '3': {
        maxWidth: '865px',
      },
      '4': {
        maxWidth: '1145px',
      },
      '5': {
        maxWidth: 'none',
      },
    },
  },
});
