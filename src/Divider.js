import { styled } from './config'

const Divider = styled.div(
  {
    // Reset
    flexShrink: 0,

    height: '1px',
    backgroundColor: 'gray300',
    borderRadius: 1,
    width: 2
  },
  {
    size: {
      large: {
        width: 7,
      },
    },
    orientation: {
      vertical: {
        width: '1px',
        height: 2,
      },
    },
  },
);

export default Divider
