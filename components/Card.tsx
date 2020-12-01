import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

export type CardProps = StitchesProps<typeof Card>;
export type CardVariants = StitchesVariants<typeof Card>;

export const Card = styled('div', {
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
  flexShrink: 0,
  border: '1px solid $gray600',
  borderRadius: '$3',
  outline: 'none',

  variants: {
    interactive: {
      true: {
        ':hover': {
          borderColor: '$gray700',
        },
        ':focus': {
          borderColor: '$blue700',
          boxShadow: '0 0 0 1px $blue700'
        },
      }
    }
  }
});
