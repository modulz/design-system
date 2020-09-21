import { styled } from '../stitches.config';

export const Code = styled.code({
  backgroundColor: '$violet200',
  color: '$violet600',
  fontFamily: '$mono',
  fontSize: 'max(12px, 85%)',
  whiteSpace: 'nowrap',
  padding: '0 3px 2px 3px',

  variants: {
    size: {
      large: {
        px: '$3',
        fontSize: '$2',
      },
    },
  },
});
