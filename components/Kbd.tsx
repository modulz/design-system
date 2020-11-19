import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

export type KbdProps = StitchesProps<typeof Kbd>;

export const Kbd = styled('kbd', {
  alignItems: 'center',
  backgroundColor: '$gray200',
  borderRadius: '$2',
  color: '$hiContrast',
  display: 'inline-flex',
  fontFamily: 'inherit',
  fontSize: '$2',
  height: '$5',
  whiteSpace: 'nowrap',
  px: '5px',
  userSelect: 'none',
});
