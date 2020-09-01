import { styled } from '../css';

export const Code = styled.code({
  // Reset
  borderWidth: '0',
  boxSizing: 'border-box',
  // lineHeight: '1',
  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },

  // Custom
  backgroundColor: '$purple200',
  color: '$purple600',
  fontFamily: '$mono',
  mx: '.05em',
  pl: '.35em',
  pr: '.25em',
  py: '.05em',
  pb: '.125em',
  fontSize: 'max(12px, 85%)',
  whiteSpace: 'nowrap',

  variants: {
    size: {
      large: {
        px: '$3',
        fontSize: '$2',
      },
    },
    variant: {
      blue: {
        backgroundColor: '$blue200',
        color: '$blue600',
      },
      green: {
        backgroundColor: '$green200',
        color: '$green600',
      },
    },
  },
});
