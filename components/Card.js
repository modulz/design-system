import { styled } from '../css'

const Card = styled.div(
  {
    // Reset
    boxSizing: 'border-box',
    flexShrink: '0',

    // Custom
    border: '1px solid gray400',
    borderRadius: 2,
  },
);

export default Card
