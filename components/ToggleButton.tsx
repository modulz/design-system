import { styled } from '../stitches.config';
import { ToggleButton, styles as togglebuttonStyles } from '@interop-ui/react-toggle-button';

export const SimpleToggle = styled(ToggleButton, {
  ...(togglebuttonStyles.root as any),
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$hiContrast',
  height: '$5',
  width: '$5',
  transition: 'all 40ms linear',

  ':hover': {
    backgroundColor: '$gray300',
  },

  '&[data-state="on"]': {
    backgroundColor: '$gray400',
    ':hover': {
      backgroundColor: '$gray400',
    },
  },

  variants: {
    shape: {
      circle: {
        backgroundColor: 'transparent',
        borderRadius: '$round',
      },
      square: {
        borderRadius: '$1',
      },
    }
  }
});
