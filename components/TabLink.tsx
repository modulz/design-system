import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

export type TabLinkProps = StitchesProps<typeof TabLink>;
export type TabLinkVariants = StitchesVariants<typeof TabLink>;

export const TabLink = styled.a({
  position: 'relative',
  flexShrink: 0,
  height: '$6',
  display: 'inline-flex',
  lineHeight: 1,
  fontSize: '$2',
  px: '$3',
  userSelect: 'none',
  outline: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray900',
  textDecoration: 'none',

  '&:hover': {
    color: '$hiContrast',
  },

  variants: {
    active: {
      true: {
        color: '$hiContrast',
        '::after': {
          position: 'absolute',
          content: '""',
          left: 0,
          bottom: 0,
          width: '100%',
          height: 2,
          backgroundColor: '$blue800',
        },
      },
    },
  },
});
