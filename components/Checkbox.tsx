import { styled } from '../stitches.config';
import { Checkbox as checkboxPrimitive, styles as checkboxStyles } from '@interop-ui/react-checkbox';

export const Checkbox = styled(checkboxPrimitive, {
  ...(checkboxStyles.root as any),
  width: 25,
  height: 25,
  boxShadow: 'inset 0 0 0 1px $gray400',
  borderRadius: '$1',

  ':hover': {
    boxShadow: 'inset 0 0 0 1px $gray500',
  },

  ':focus': {
    boxShadow: 'inset 0 0 0 1px $blue500, 0 0 0 1px $blue500'
  },

  '&[data-state="checked"]': {
    backgroundColor: '$blue500',
    boxShadow: 'none',
    color: 'white',
    ':hover': {
      boxShadow: 'none',
    },
  }
});