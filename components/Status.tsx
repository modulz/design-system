import { styled } from '../stitches.config';

export const Status = styled.div({
  borderRadius: '$round',

  variants: {
    size: {
      '1': {
        width: '6px',
        height: '6px',
      },
      '2': {
        width: '$2',
        height: '$2',
      },
    },
    color: {
      'gray': {
        backgroundColor: '$gray900',
      },
      'blue': {
        backgroundColor: '$blue800',
      },
      'green': {
        backgroundColor: '$green800',
      },
      'yellow': {
        backgroundColor: '$yellow800',
      },
      'red': {
        backgroundColor: '$red800',
      },
    },
  },
});