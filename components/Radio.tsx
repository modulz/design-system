import React from 'react';
import { styled, StitchesProps, StitchesVariants } from '../stitches.config';
import {
  RadioGroup as RadioGroupPrimitive,
  RadioProps as RadioGroupPrimitiveProps,
} from '@interop-ui/react-radio-group';

export type RadioProps = RadioGroupPrimitiveProps &
  StitchesProps<typeof StyledRadio> &
  RadioVariants;
export type RadioVariants = StitchesVariants<typeof StyledRadio>;

const StyledRadio = styled(RadioGroupPrimitive, {
  borderRadius: '$round',
  color: '$hiContrast',
  boxShadow: 'inset 0 0 0 1px $gray600',
  overflow: 'hidden',
  '&:hover': {
    boxShadow: 'inset 0 0 0 1px $gray700',
  },
  '&:focus': {
    outline: 'none',
    borderColor: '$red600',
    boxShadow: 'inset 0 0 0 1px $blue800, 0 0 0 1px $blue800',
  },

  variants: {
    size: {
      '1': {
        width: '$3',
        height: '$3',
      },
      '2': {
        width: '$5',
        height: '$5',
      },
    },
  },
});

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
});

export function Radio({ size = '1', css, ...props }: RadioProps) {
  return (
    <StyledRadio {...props} size={size}>
      <StyledIndicator />
    </StyledRadio>
  );
}
