import { styled } from './config'

const IconButton = styled.button(
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
    webkitTapHighlightColor: 'transparent',
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
    backgroundColor: 'white',
    boxShadow: 'inset 0 0 0 1px hsl(206,10%,84%)',
    borderRadius: 'round',
    color: 'text',
    height: 5,
    width: 5,
    transition: 'all 40ms linear',

    ':hover': {
      boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
    },

    ':active': {
      backgroundColor: 'gray100',
      boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
    },

    ':disabled': {
      backgroundColor: 'gray200',
      boxShadow: 'inset 0 0 0 1px hsl(206,10%,84%)',
      color: 'gray500',
      ':hover': {
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,84%)',
      },
    },
  },
  {
    size: {
      large: {
        height: 6,
        width: 6,
      },
    },
    variant: {
      ghost: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        ':hover': {
          backgroundColor: 'gray200',
          boxShadow: 'none',
        },
        ':active': {
          backgroundColor: 'gray300',
        },
        green: {
          backgroundColor: 'green600',
        },
      },
      raised: {
        boxShadow: '0 15px 32px 0 16px 32px -10px hsl(206deg 12% 5% / 25%), 0 8px 16px -15px hsl(0deg 0% 0% / 10%)',
        ':hover': {
          backgroundColor: 'gray200',
          boxShadow: 'none',
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

export default IconButton
