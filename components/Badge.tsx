import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

export type BadgeProps = StitchesProps<typeof Badge>;
export type BadgeVariants = StitchesVariants<typeof Badge>;

export const Badge = styled('span', {
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
      '1': {
        height: '$3',
        px: '$1',
        fontSize: '$1',
      },
      '2': {
        height: '$5',
        px: '$3',
        fontSize: '$2',
      },
    },
    variant: {
      red: {
        backgroundColor: '$red200',
        color: '$red900',
      },
      crimson: {
        backgroundColor: '$crimson200',
        color: '$crimson900',
      },
      pink: {
        backgroundColor: '$pink200',
        color: '$pink900',
      },
      purple: {
        backgroundColor: '$purple200',
        color: '$purple900',
      },
      violet: {
        backgroundColor: '$violet200',
        color: '$violet900',
      },
      indigo: {
        backgroundColor: '$indigo200',
        color: '$indigo900',
      },
      blue: {
        backgroundColor: '$blue200',
        color: '$blue900',
      },
      turquoise: {
        backgroundColor: '$turquoise200',
        color: '$turquoise900',
      },
      teal: {
        backgroundColor: '$teal200',
        color: '$teal900',
      },
      green: {
        backgroundColor: '$green200',
        color: '$green900',
      },
      lime: {
        backgroundColor: '$lime200',
        color: '$lime900',
      },
      yellow: {
        backgroundColor: '$yellow200',
        color: '$yellow900',
      },
      orange: {
        backgroundColor: '$orange200',
        color: '$orange900',
      },
      gold: {
        backgroundColor: '$gold200',
        color: '$gold900',
      },
      bronze: {
        backgroundColor: '$bronze200',
        color: '$bronze900',
      },
    },
  },
});
