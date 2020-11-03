import { styled, StitchesProps, StitchesVariants } from '../stitches.config';
import { Separator as SeparatorPrimitive, styles } from '@interop-ui/react-separator';

export type SeparatorProps = StitchesProps<typeof Separator>;
export type SeparatorVariants = StitchesVariants<typeof Separator>;

export const Separator = styled(SeparatorPrimitive, {
  ...styles.root,
  // flexShrink: 0,

  height: '1px',
  backgroundColor: '$gray500',

  '[data-orientation="horizontal"]': {
    height: '1px',
    width: '50px',
  },

  '[data-orientation="vertical"]': {
    width: '1px',
    height: '50px',
  },

  variants: {
    size: {
      '1': {
        width: '$3',
      },
      '2': {
        width: '$7',
      },
    },
  },
});
