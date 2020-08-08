import { styled } from './config'

const Button = styled.button(
  {
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: 'transparent',
    borderWidth: '0',
    boxSizing: 'border-box',
    display: 'inline-flex',
    flexShrink: '0',
    fontFamily: 'inherit',
    fontSize: '14px',
    justifyContent: 'center',
    lineHeight: '1',
    outline: 'none',
    padding: '0',
    textDecoration: 'none',
    userSelect: 'none',
    ':disabled': {
      pointerEvents: 'none'
    },
    '::before': {
      boxSizing: 'border-box',
    },
    '::after': {
      boxSizing: 'border-box',
    },

    backgroundColor: 'white',
    boxShadow: 'inset 0 0 0 1px hsl(206,10%,84%)',
    borderRadius: '1',
    color: 'gray900',
    height: 5,
    px: 2,
    fontSize: 2,
    fontWeight: '500',

    ':hover': {
      boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
    },

    ':active': {
      backgroundColor: 'gray100',
      boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
    },
  },
  {
    size: {
      large: {
        height: 6,
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
          backgroundColor: 'blue600',
          boxShadow: 'none',
        },
        ':active': {
          backgroundColor: 'blue600',
          boxShadow: 'none',
        },
      },
      green: {
        backgroundColor: 'green500',
        boxShadow: 'none',
        color: 'white',
        ':hover': {
          backgroundColor: 'green600',
          boxShadow: 'none',
        },
        ':active': {
          backgroundColor: 'green600',
          boxShadow: 'none',
        },
      },
      red: {
        color: 'red600',
      }
    },
    state: {
      active: {
        backgroundColor: 'gray300',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        ':hover': {
          boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        },
        ':active': {
          backgroundColor: 'gray300',
        },
      },
      disabled: {
        backgroundColor: 'gray200',
        color: 'gray500',
      },
    },
  },
);

export default Button
