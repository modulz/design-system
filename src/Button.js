import { styled } from './config'

const Button = styled.button(
  {
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: 'hsl(0 0% 90%)',
    borderWidth: '0',
    boxSizing: 'border-box',
    display: 'inline-flex',
    flexShrink: '0',
    fontFamily: 'inherit',
    fontSize: '14px',
    justifyContent: 'center',
    lineHeight: '1',
    outline: 'none',
    padding: '3px 6px',
    textDecoration: 'none',
    userSelect: 'none',

    backgroundColor: 'white',
    boxShadow: 'inset 0 0 0 1px gainsboro',
    borderRadius: '1',
    color: 'gray900',
    py: '6px',
    px: 2,
    fontSize: 2,
    fontWeight: '500',
  },
  {
    size: {
      large: {
        py: 2,
        px: 3,
        fontSize: 3,
      },
    },
    color: {
      blue: {
        backgroundColor: 'royalblue',
        boxShadow: 'none',
        color: 'white',
      },
      green: {
        backgroundColor: 'green',
        boxShadow: 'none',
        color: 'white',
      },
      red: {
        backgroundColor: 'tomato',
        boxShadow: 'none',
        color: 'white',
      }
    },
  },
);

export default Button
