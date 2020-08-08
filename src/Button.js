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
    boxShadow: 'inset 0 0 0 1px hsl(206,12%,86%)',
    borderRadius: '1',
    color: 'gray900',
    py: '6px',
    px: 2,
    fontSize: 2,
    fontWeight: '500',

    ':hover': {
      boxShadow: 'inset 0 0 0 1px hsl(206,12%,78%)',
    },
  },
  {
    size: {
      large: {
        py: '9px',
        px: 3,
        fontSize: 3,
      },
    },
    color: {
      blue: {
        backgroundColor: 'blue500',
        boxShadow: 'none',
        color: 'white',
        ':hover': {
          boxShadow: 'none',
        },
      },
      green: {
        backgroundColor: 'green500',
        boxShadow: 'none',
        color: 'white',
        ':hover': {
          boxShadow: 'none',
        },
      },
      red: {
        color: 'red600',
        ':hover': {
          boxShadow: 'none',
        },
      }
    },
  },
);

export default Button
