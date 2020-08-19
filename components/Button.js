import { styled } from '../css'

const Button = styled.button(
  {
    // Reset
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
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    ':disabled': {
      pointerEvents: 'none'
    },
    '::before': {
      boxSizing: 'border-box',
    },
    '::after': {
      boxSizing: 'border-box',
    },

    // Custom
    backgroundColor: 'loContrast',
    border: '1px solid gray400',
    borderRadius: 1,
    color: 'hiContrast',
    height: 5,
    px: 2,
    fontSize: 2,
    fontWeight: '500',
    ':hover': {
      borderColor: 'gray500',
    },
    ':active': {
      backgroundColor: 'gray100',
      borderColor: 'gray500',
    },
    ':disabled': {
      backgroundColor: 'gray200',
      borderColor: 'gray400',
      color: 'gray400',
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
    variant: {
      blue: {
        backgroundColor: 'blue500',
        borderWidth: '0',
        color: 'white',
        ':hover': {
          backgroundColor: 'blue600',
        },
        ':active': {
          backgroundColor: 'blue600',
        },
      },
      green: {
        backgroundColor: 'green500',
        borderWidth: '0',
        color: 'white',
        ':hover': {
          backgroundColor: 'green600',
        },
        ':active': {
          backgroundColor: 'green600',
        },
      },
      red: {
        color: 'red600',
      },
      ghost: {
        backgroundColor: 'transparent',
        borderWidth: '0',
        fontWeight: '400',
        ':hover': {
          backgroundColor: 'gray200',
        },
        ':active': {
          backgroundColor: 'gray300',
        },
      },
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
      waiting: {
        backgroundColor: 'gray300',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        ':hover': {
          boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        },
        ':active': {
          backgroundColor: 'gray300',
        },
      },
    },
  },
);

export default Button
