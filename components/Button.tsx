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
  borderRadius: '$1',
  color: '$hiContrast',
  height: '$5',
  px: '$2',
  fontFamily: '$untitled',
  fontSize: '$2',
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',

  ':hover': {
    boxShadow: 'inset 0 0 0 1px $gray700',
  },
  ':active': {
    backgroundColor: '$gray100',
    boxShadow: 'inset 0 0 0 1px $gray700',
  },
  ':focus': {
    boxShadow: 'inset 0 0 0 1px $gray700, 0 0 0 1px $gray700',
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
        backgroundColor: '$blue800',
        boxShadow: 'none',
        color: 'white',
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
        backgroundColor: '$green800',
        boxShadow: 'none',
        color: 'white',
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
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        ':hover': {
          boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        },
        ':active': {
          backgroundColor: '$gray300',
        },
      },
      waiting: {
        backgroundColor: '$gray300',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        ':hover': {
          boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        },
        ':active': {
          backgroundColor: '$gray300',
        },
      },
    },
  },
});
