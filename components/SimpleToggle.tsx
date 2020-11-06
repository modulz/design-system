import { styled, StitchesProps, StitchesVariants } from '../stitches.config';
import { ToggleButton, styles, ToggleButtonProps } from '@interop-ui/react-toggle-button';

export type SimpleToggleProps = ToggleButtonProps & StitchesProps<typeof SimpleToggle>;
export type SimpleToggleVariants = StitchesVariants<typeof SimpleToggle>;

export const SimpleToggle = styled(ToggleButton, {
  ...styles.root,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$hiContrast',
  height: '$5',
  width: '$5',
  transition: 'all 40ms linear',
  backgroundColor: '$gray200',

  '&:hover': {
    backgroundColor: '$gray300',
  },

  '&[data-state="on"]': {
    backgroundColor: '$gray600',
    '&:hover': {
      backgroundColor: '$gray700',
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
    },
  },
});
