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
  color: '$gray900',
  whiteSpace: 'nowrap',

  variants: {
    size: {
      1: {
        height: '$3',
        px: '$1',
        fontSize: '$1',
      },
      2: {
        height: '$5',
        px: '$3',
        fontSize: '$2',
      },
    },
    variant: {
      red: {
        backgroundColor: '$red200',
        color: '$red600',
      },
      crimson: {
        backgroundColor: '$crimson200',
        color: '$crimson600',
      },
      pink: {
        backgroundColor: '$pink200',
        color: '$pink600',
      },
      purple: {
        backgroundColor: '$purple200',
        color: '$purple600',
      },
      violet: {
        backgroundColor: '$violet200',
        color: '$violet600',
      },
      indigo: {
        backgroundColor: '$indigo200',
        color: '$indigo600',
      },
      blue: {
        backgroundColor: '$blue200',
        color: '$blue600',
      },
      turquoise: {
        backgroundColor: '$turquoise200',
        color: '$turquoise600',
      },
      teal: {
        backgroundColor: '$teal200',
        color: '$teal600',
      },
      green: {
        backgroundColor: '$green200',
        color: '$green600',
      },
      lime: {
        backgroundColor: '$lime200',
        color: '$lime600',
      },
      yellow: {
        backgroundColor: '$yellow200',
        color: '$yellow600',
      },
      orange: {
        backgroundColor: '$orange200',
        color: '$orange600',
      },
      gold: {
        backgroundColor: '$gold200',
        color: '$gold600',
      },
      bronze: {
        backgroundColor: '$bronze200',
        color: '$bronze600',
      },
    },
  },
});
