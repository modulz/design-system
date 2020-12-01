import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

export type CardProps = StitchesProps<typeof Card>;
export type CardVariants = StitchesVariants<typeof Card>;

export const Card = styled('div', {
  backgroundColor: '$panel',
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
  flexShrink: 0,
  // border: '1px solid $gray600',
  borderRadius: '$3',
  outline: 'none',
  boxShadow: '0 0 0 1px rgba(0,0,0,.15)',

  variants: {
    interactive: {
      true: {
        ':hover': {
          // borderColor: '$gray700',
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.2)',
        },
        ':focus': {
          // borderColor: '$blue700',
          boxShadow: 'inset 0 0 0 1px $blue700, 0 0 0 1px $blue700, 0 1px 2px rgba(0,0,0,.2)',
        },
      }
    }
  }
});
