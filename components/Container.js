import { styled } from '../css'

const Container = styled.div(
  {
    // Reset
    boxSizing: 'border-box',
    flexShrink: '0',

    // Custom
    ml: 'auto',
    mr: 'auto',
    width: '90%',
    px: 5,
  },
  {
    size: {
      1: {
        maxWidth: '300px',
      },
      2: {
        maxWidth: '585px',
      },
      3: {
        maxWidth: '865px',
      },
      3: {
        maxWidth: '1145px',
      },
      4: {
        maxWidth: 'none',
      },
    },
  },
);

export default Container
