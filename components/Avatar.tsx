import { styled } from '../stitches.config';
import { Avatar as AvatarPrimitive, styles } from '@interop-ui/react-avatar';

export const MyAvatar = styled(AvatarPrimitive, {
  ...(styles.root as any),
  position: 'relative',
  borderRadius: '50%',
  boxShadow: 'inset 0px 0px 1px rgba(0, 0, 0, 0.12)',
  backgroundImage: 'linear-gradient(gray, black)',

  '[data-interop-avatar-image]': {
    ...(styles.image as any),
  },

  '[data-interop-avatar-fallback]': {
    ...(styles.fallback as any),
    color: 'white',
    fontSize: '$6',
    textTransform: 'uppercase',
  },

  variants: {
    size: {
      1: {
        width: '$3',
        height: '$3',
      },
      2: {
        width: '$5',
        height: '$5',
      },
      3: {
        width: '$6',
        height: '$6',
      },
      4: {
        width: '$7',
        height: '$7',
      },
      5: {
        width: '$9',
        height: '$9',
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
          transition: 'opacity 50ms linear'
        },
        ':hover': {
          '::after': {
            opacity: '1',
          },
        }
      }
    }
  },
});
