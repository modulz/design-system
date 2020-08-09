import { styled } from './config'

const Text = styled.span(
  {
    // Reset
    lineHeight: '1',
    margin: 0,
    fontWeight: '400',

    // Custom
    color: 'hiContrast',
    fontSize: 3,
  },
  {
    size: {
      1: {
        fontSize: 1,
      },
      2: {
        fontSize: 2,
      },
      3: {
        fontSize: 3,
      },
      4: {
        fontSize: 4,
      },
      5: {
        fontSize: 5,
      },
      6: {
        fontSize: 6,
      },
      7: {
        fontSize: 7,
      },
      8: {
        fontSize: 8,
      },
      9: {
        fontSize: 9,
      },
    },
  },
);

export default Text
