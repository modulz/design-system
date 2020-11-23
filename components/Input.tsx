import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

export type InputProps = StitchesProps<typeof Input>;
export type InputVariants = StitchesVariants<typeof Input>;

export const Input = styled('input', {
  // Reset
  appearance: 'none',
  backgroundColor: 'transparent',
  borderWidth: '0',
  boxSizing: 'border-box',
  flexShrink: 0,
  fontFamily: 'inherit',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },

  // Custom
  boxShadow: 'inset 0 0 0 1px $gray600',
  borderRadius: '$2',
  color: '$hiContrast',
  fontVariantNumeric: 'tabular-nums',

  ':focus': {
    boxShadow: 'inset 0px 0px 0px 1px $blue800, 0px 0px 0px 1px $blue800',
  },
  ':read-only': {
    color: '$gray500',
  },
  ':disabled': {
    pointerEvents: 'none',
    backgroundColor: '$gray100',
    color: '$gray500',
    cursor: 'not-allowed',
  },
  '::placeholder': {
    color: '$gray800',
  },

  variants: {
    size: {
      '1': {
        p: '$1',
        fontSize: '$1',
      },
      '2': {
        pt: 8,
        px: '$2',
        pb: 8,
        fontSize: '$3',
      },
    },
    variant: {
      ghost: {
        boxShadow: 'none',
        ':hover': {
          boxShadow: 'inset 0 0 0 1px $gray300',
        },
        ':focus': {
          boxShadow: 'rgb(96, 179, 251) 0px 0px 0px 1px inset, rgb(96, 179, 251) 0px 0px 0px 1px',
        },
      },
    },
    cursor: {
      default: {
        cursor: 'default',
        ':focus': {
          cursor: 'text',
        },
      },
    },
  },
});
