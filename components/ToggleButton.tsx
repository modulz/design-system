import { styled } from '../stitches.config';
import { ToggleButton, styles as togglebuttonStyles } from '@interop-ui/react-toggle-button';

export const SimpleToggle = styled(ToggleButton, {
  ...togglebuttonStyles.root,
  backgroundColor: '$gray200',

  ':hover': {
    color: 'blue',
  },
  '&[data-state="on"]': {
    color: 'red',
    ':hover': {
      color: 'green'
    }
  },
});
