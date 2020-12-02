import { StitchesProps, styled } from '../stitches.config';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export type ControlGroupProps = StitchesProps<typeof ControlGroup>;

export const ControlGroup = styled('div', {
  display: 'flex',
  '& button': {
    borderRadius: 0,
    boxShadow: 'inset 0 1px 0 0 $gray600, inset -1px 0 0 0 $gray600, inset 0 -1px 0 0 $gray600',
    ':hover': {
      boxShadow: 'inset 0 1px 0 0 $gray700, inset -1px 0 0 0 $gray700, inset 0 -1px 0 0 $gray700',
    },
    ':first-child': {
      borderTopLeftRadius: '$2',
      borderBottomLeftRadius: '$2',
      boxShadow: 'inset 0 0 0 1px $gray600',
      ':hover': {
        boxShadow: 'inset 0 0 0 1px $gray700',
      },
    },
    ':last-child': {
      borderTopRightRadius: '$2',
      borderBottomRightRadius: '$2',
      boxShadow: 'inset 0 1px 0 0 $gray600, inset -1px 0 0 0 $gray600, inset 0 -1px 0 0 $gray600',
    }
  },
  '& input': {
    borderRadius: 0,
    boxShadow: 'inset 0 1px 0 0 $gray600, inset -1px 0 0 0 $gray600, inset 0 -1px 0 0 $gray600',
    ':first-child': {
      borderTopLeftRadius: '$2',
      borderBottomLeftRadius: '$2',
      boxShadow: 'inset 0 0 0 1px $gray600',
    },
    ':last-child': {
      borderTopRightRadius: '$2',
      borderBottomRightRadius: '$2',
      boxShadow: 'inset 0 1px 0 0 $gray600, inset -1px 0 0 0 $gray600, inset 0 -1px 0 0 $gray600',
    }
  },
});
