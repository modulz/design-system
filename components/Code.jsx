import { styled } from '../css';

export const Code = styled.code(
  {
    // Reset
    backgroundColor: 'transparent',
    borderWidth: '0',
    boxSizing: 'border-box',
    lineHeight: '1',
    '::before': {
      boxSizing: 'border-box',
    },
    '::after': {
      boxSizing: 'border-box',
    },

    // Custom
    color: 'purple600',
    position: 'relative',
    fontFamily: 'mono',
    mx: '.05em',
    // pl: '.35em',
    // pr: '.25em',
    // py: '.05em',
    // pb: '.125em',
    fontSize: 'max(12px, 90%)',
    lineHeight: '20px',
    whiteSpace: 'nowrap',
    '&::after': {
      backgroundColor: 'purple200',
      content: "''",
      position: 'absolute',
      top: '-3px',
      left: '-3px',
      width: 'calc(100% + 6px)',
      height: 'calc(100% + 6px)',
      zIndex: -1,
    },
  },
  {
    size: {
      large: {
        px: 3,
        fontSize: 2,
      },
    },
    variant: {
      blue: {
        backgroundColor: 'blue200',
        color: 'blue600',
      },
      green: {
        backgroundColor: 'green200',
        color: 'green600',
      },
    },
  }
);
