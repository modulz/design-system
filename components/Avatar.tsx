import { styled } from '../stitches.config';
import { Avatar as AvatarPrimitive, styles, AvatarProps as AvatarPrimitiveProps } from '@interop-ui/react-avatar';
import { StitchesVariants } from '@stitches/react';

export const StyledAvatar = styled(AvatarPrimitive, {
  ...styles.root,
  position: 'relative',
  boxShadow: 'inset 0px 0px 1px rgba(0, 0, 0, 0.12)',
  backgroundImage: 'linear-gradient(gray, black)',
  border: 'none',
  outline: 'none',

  '& [data-interop-avatar-image]': {
    ...styles.image,
  },

  '[data-interop-avatar-fallback]': {
    color: 'white',
    textTransform: 'uppercase',
  },

  variants: {
    size: {
      1: {
        width: '$3',
        height: '$3',
        '[data-interop-avatar-fallback]': {
          fontSize: '11px',
        },
      },
      2: {
        width: '$5',
        height: '$5',
        '[data-interop-avatar-fallback]': {
          fontSize: '$3',
        },
      },
      3: {
        width: '$6',
        height: '$6',
        '[data-interop-avatar-fallback]': {
          fontSize: '$6',
        },
      },
      4: {
        width: '$7',
        height: '$7',
        '[data-interop-avatar-fallback]': {
          fontSize: '$7',
        },
      },
      5: {
        width: '$8',
        height: '$8',
        '[data-interop-avatar-fallback]': {
          fontSize: '$9',
        },
      },
      6: {
        width: '$9',
        height: '$9',
        '[data-interop-avatar-fallback]': {
          fontSize: '$9',
        },
      },
    },
    shape: {
      square: {
        borderRadius: '$2',
      },
      circle: {
        borderRadius: '50%',
      },
    },
    inactive: {
      true: {
        opacity: '.3',
      },
    },
    interactive: {
      true: {
        '::after': {
          content: '""',
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          backgroundColor: 'rgba(0,0,0,.1)',
          opacity: '0',
          pointerEvents: 'none',
          transition: 'opacity 40ms linear',
        },
        ':hover': {
          '::after': {
            opacity: '1',
          },
        },
      },
    },
  },
});

export const AvatarNestedItem = styled.div({
  boxShadow: '0 0 0 2px $loContrast',
  borderRadius: '50%',
});

export const AvatarGroup = styled.div({
  display: 'flex',
  flexDirection: 'row-reverse',
  [`${AvatarNestedItem}:nth-child(n+2)`]: {
    marginRight: '-$1',
  },
});

export type AvatarProps = {
  alt?: string;
  src?: string;
  fallback?: React.ReactNode;
} AvatarPrimitiveProps & StitchesVariants<typeof StyledAvatar>;

export function Avatar({ alt, src, fallback, ...props }: AvatarProps) {
  return (
    <StyledAvatar {...props}>
      <AvatarPrimitive.Image alt={alt} src={src} />
      <AvatarPrimitive.Fallback>{fallback}</AvatarPrimitive.Fallback>
    </StyledAvatar>
  );
}
