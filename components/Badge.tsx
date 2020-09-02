import { styled } from '../stitches.config';

export const Badge = styled.span({
  // Reset
  alignItems: 'center',
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'inherit',
  justifyContent: 'center',
  lineHeight: '1',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  ':disabled': {
    pointerEvents: 'none',
  },
  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },

  // Custom
  backgroundColor: '$gray200',
  borderRadius: '$pill',
  color: '$gray600',
  height: '$3',
  px: '$1',
  fontSize: '$1',
  whiteSpace: 'nowrap',

  variants: {
    size: {
      large: {
        height: '$5',
        px: '$3',
        fontSize: '$2',
      },
    },
    variant: {
      blue: {
        backgroundColor: '$blue200',
        color: '$blue600',
      },
      green: {
        backgroundColor: '$green200',
        color: '$green600',
      },
      red: {
        backgroundColor: '$red200',
        color: '$red600',
      },
      yellow: {
        backgroundColor: '$yellow200',
        color: '$yellow600',
      },
    },
  },
});
