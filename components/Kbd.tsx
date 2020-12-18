import { styled, StitchesProps } from '../stitches.config';

export type KbdProps = StitchesProps<typeof Kbd>;

export const Kbd = styled('kbd', {
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$loContrast',
  borderRadius: '$1',
  color: '$hiContrast',
  userSelect: 'none',
  cursor: 'default',
  whiteSpace: 'nowrap',
  boxShadow: `
    inset 0 0.5px rgba(255, 255, 255, 0.1),
    inset 0 1px 5px $gray100,
    0px 0px 0px 0.5px $gray700,
    0px 2px 1px -1px $gray700,
    0 1px $gray700`,
  textShadow: '0 0 1px rgba(255, 255, 255, 0.5)',

  fontFamily: 'inherit',
  fontWeight: 400,
  lineHeight: '1.5',
  mx: '2px',

  // Size 2
  px: '$1',
  height: '$4',
  minWidth: '2em',
  fontSize: '$1',

  variants: {
    size: {
      '1': {
        px: '0.3em',
        height: '$3',
        minWidth: '1.6em',
        fontSize: '10px',
      },
    },
    width: {
      shift: {
        pr: '2.5em',
      },
      command: {
        pl: '1em',
      },
      space: {
        px: '3.5em',
      },
      return: {
        px: '0.9em',
      },
    },
  },
});
