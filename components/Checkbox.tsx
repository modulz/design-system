import React from 'react';
import { styled, StitchesProps, StitchesVariants } from '../stitches.config';
import {
  Checkbox as CheckboxPrimitive,
  CheckboxProps as CheckboxPrimitiveProps
} from '@interop-ui/react-checkbox';
import { CheckIcon } from '@modulz/radix-icons'

export type CheckboxProps = CheckboxPrimitiveProps &
  StitchesProps<typeof Checkbox>;
export type CheckboxVariants = StitchesVariants<typeof Checkbox>;

const StyledCheckbox = styled(CheckboxPrimitive, {
  borderRadius: '$1',
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
    }
  }
});
const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
});

export function Checkbox({
  size = '1',
  css,
  ...props
}: CheckboxPrimitiveProps) {
  return (
    <StyledCheckbox {...props} size={size}>
      <StyledIndicator>
        <CheckIcon />
      </StyledIndicator>
    </StyledCheckbox>
  );
}