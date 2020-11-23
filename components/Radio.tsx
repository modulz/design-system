import React from 'react';
import { styled, StitchesProps, StitchesVariants } from '../stitches.config';
import {
  RadioGroup as RadioGroupPrimitive,
  RadioProps as RadioGroupPrimitiveProps,
  RadioGroupItemProps,
} from '@interop-ui/react-radio-group';
import { CheckIcon } from '@modulz/radix-icons';

export type RadioGroupProps = RadioGroupPrimitiveProps;
export type RadioProps = RadioGroupItemProps & StitchesProps<typeof StyledRadio> & RadioVariants;
export type RadioVariants = StitchesVariants<typeof StyledRadio>;

export function RadioGroup(props: RadioGroupPrimitiveProps) {
  return <RadioGroupPrimitive {...props} />;
}

const StyledRadio = styled(RadioGroupPrimitive.Item, {
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
  position: 'relative',
  '&:after': {
    content: '""',
    display: 'block',
    width: '$1',
    height: '$1',
    borderRadius: '$round',
    backgroundColor: '$hiContrast',
  },
});

export function Radio({ size = '1', ...props }: RadioProps) {
  return (
    <StyledRadio size={size} {...props}>
      <StyledIndicator />
    </StyledRadio>
  );
}

RadioGroup.Radio = Radio;
