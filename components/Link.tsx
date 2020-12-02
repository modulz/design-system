import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

export type LinkProps = StitchesProps<typeof Link>;
export type LinkVariants = StitchesVariants<typeof Link>;

export const Link = styled('a', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,
  outline: 'none',
  textDecoration: 'none',
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
  color: '$hiContrast',
  borderBottom: '1px solid $gray500',
  lineHeight: 'inherit',
  // transition: 'all 50ms linear',
  ':hover': {
    borderColor: '$gray700',
  },
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
        color: '$blue900',
        textDecoration: 'none',
        borderColor: 'transparent',
        ':hover': {
          borderColor: '$blue300',
        },
      },
      subtle: {
        color: '$gray900',
        borderColor: 'transparent',
        ':hover': {
          borderColor: '$gray300',
        },
      },
    },
  },
});
