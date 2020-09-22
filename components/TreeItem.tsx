import { styled } from '../stitches.config';

export const TreeItem = styled.div({
  // Reset
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'flex',
  lineHeight: '1',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  ':disabled': {
    pointerEvents: 'none',
  },
  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },

  // Custom
  height: '29px',
  px: '$2',
  fontSize: '$1',
  color: '$hiContrast',

  variants: {
    variant: {
      gray: {
        backgroundColor: '$gray200',
        ':hover': {
          backgroundColor: '$gray300',
        },
        ':active': {
          backgroundColor: '$gray400',
        },
      },
      blue: {
        backgroundColor: '$blue200',
        ':hover': {
          backgroundColor: '$blue300',
        },
        ':active': {
          backgroundColor: '$blue400',
        },
      },
      red: {
        backgroundColor: '$red200',
        ':hover': {
          backgroundColor: '$red300',
        },
        ':active': {
          backgroundColor: '$red400',
        },
      },
      purple: {
        backgroundColor: '$purple200',
        ':hover': {
          backgroundColor: '$purple300',
        },
        ':active': {
          backgroundColor: '$purple400',
        },
      },
      violet: {
        backgroundColor: '$violet200',
        ':hover': {
          backgroundColor: '$violet300',
        },
        ':active': {
          backgroundColor: '$violet400',
        },
      },
      orange: {
        backgroundColor: '$orange200',
        ':hover': {
          backgroundColor: '$orange300',
        },
        ':active': {
          backgroundColor: '$orange400',
        },
      },
      green: {
        backgroundColor: '$green200',
        ':hover': {
          backgroundColor: '$green300',
        },
        ':active': {
          backgroundColor: '$green400',
        },
      },
      yellow: {
        backgroundColor: '$yellow200',
        ':hover': {
          backgroundColor: '$yellow300',
        },
        ':active': {
          backgroundColor: '$yellow400',
        },
      },
    },
  },
});
