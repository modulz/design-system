import { styled } from '../css'

const Badge = styled.span(
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
    backgroundColor: 'gray200',
    borderRadius: 'pill',
    color: 'gray600',
    fontFamily: 'mono',
    height: 3,
    px: 2,
    fontSize: 1,
    fontWeight: '500',
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
        backgroundColor: 'blue100',
        color: 'blue600',
      },
      green: {
        backgroundColor: 'green100',
        color: 'green600',
      },
      red: {
        backgroundColor: 'red100',
        color: 'red600',
      },
      yellow: {
        backgroundColor: 'yellow100',
        color: 'yellow600',
      },
    },
  },
);

export default Badge
