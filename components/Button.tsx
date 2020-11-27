import { StitchesProps, StitchesVariants, styled } from '../stitches.config';

export type ButtonProps = StitchesProps<typeof Button>;
export type ButtonVariants = StitchesVariants<typeof Button>;

export const Button = styled('button', {
  // Reset
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },

  // Custom
  backgroundColor: '$loContrast',
  border: 'none',
  boxShadow: 'inset 0 0 0 1px $gray600',
  borderRadius: '$2',
  color: '$hiContrast',
  height: '$5',
  px: '$2',
  fontFamily: '$untitled',
  fontSize: '$2',
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',
  position: 'relative',

  ':hover': {
    boxShadow: 'inset 0 0 0 1px $gray700',
  },
  ':active': {
    backgroundColor: '$gray100',
    boxShadow: 'inset 0 0 0 1px $gray700',
  },
  ':focus': {
    boxShadow: 'inset 0 0 0 1px $gray700, 0 0 0 1px $gray700',
    zIndex: '1',
  },
  ':disabled': {
    pointerEvents: 'none',
    backgroundColor: '$gray200',
    boxShadow: 'inset 0 0 0 1px $gray400',
    color: '$gray400',
  },

  variants: {
    size: {
      large: {
        height: '$6',
        px: '$3',
        fontSize: '$3',
      },
    },
    variant: {
      blue: {
        backgroundColor: '$blue100',
        boxShadow: 'inset 0 0 0 1px $blue600',
        color: '$blue900',
        ':hover': {
          backgroundColor: '$blue900',
          boxShadow: 'none',
        },
        ':active': {
          backgroundColor: '$blue700',
          boxShadow: 'none',
        },
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $blue500, 0 0 0 1px $blue500',
        },
      },
      green: {
        backgroundColor: '$green100',
        boxShadow: 'inset 0 0 0 1px $green600',
        color: '$green900',
        ':hover': {
          backgroundColor: '$green600',
          boxShadow: 'none',
        },
        ':active': {
          backgroundColor: '$green600',
          boxShadow: 'none',
        },
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $green500, 0 0 0 1px $green500',
        },
      },
      red: {
        color: '$red900',
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $red500, 0 0 0 1px $red500',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        fontWeight: 400,
        ':hover': {
          backgroundColor: '$gray200',
          boxShadow: 'none',
        },
        ':active': {
          backgroundColor: '$gray300',
          boxShadow: 'none',
        },
      },
    },
    state: {
      active: {
        backgroundColor: '$gray300',
        boxShadow: 'inset 0 0 0 1px $gray700',
        color: '$gray900',
        ':hover': {
          backgroundColor: '$gray400',
        },
        ':active': {
          backgroundColor: '$gray400',
        },
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $gray700, 0 0 0 1px $gray700',
        },
      },
      waiting: {
        backgroundColor: '$gray300',
        boxShadow: 'inset 0 0 0 1px $gray700',
        color: 'transparent',
        ':hover': {
          backgroundColor: '$gray400',
        },
        ':active': {
          backgroundColor: '$gray400',
        },
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $gray700, 0 0 0 1px $gray700',
        },
      },
    },
  },
});
