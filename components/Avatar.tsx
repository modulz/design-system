import { styled, StitchesProps, StitchesVariants } from '../stitches.config';
import {
  Avatar as AvatarPrimitive,
  styles,
  AvatarProps as AvatarPrimitiveProps,
} from '@interop-ui/react-avatar';
import { Box } from './Box';
import { Status, StatusVariants } from './Status';

type StatusColors = Pick<StatusVariants, 'color'>;
export type AvatarProps = AvatarPrimitiveProps &
  StitchesProps<typeof StyledAvatar> & {
    alt?: string;
    src?: string;
    fallback?: React.ReactNode;
    status?: StatusColors['color'];
  };
export type AvatarVariants = StitchesVariants<typeof Avatar>;

export const StyledAvatar = styled(AvatarPrimitive, {
  ...styles.root,
  position: 'relative',
  boxShadow: 'inset 0px 0px 1px rgba(0, 0, 0, 0.12)',
  backgroundImage: 'linear-gradient(gray, black)',
  border: 'none',
  outline: 'none',

  variants: {
    size: {
      '1': {
        width: '$3',
        height: '$3',
      },
      '2': {
        width: '$5',
        height: '$5',
      },
      '3': {
        width: '$6',
        height: '$6',
      },
      '4': {
        width: '$7',
        height: '$7',
      },
      '5': {
        width: '$8',
        height: '$8',
      },
      '6': {
        width: '$9',
        height: '$9',
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

const AvatarImage = styled(AvatarPrimitive.Image, {
  ...styles.image,
});

const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  color: 'white',
  textTransform: 'uppercase',

  variants: {
    size: {
      '1': {
        fontSize: '11px',
      },
      '1': {
        fontSize: '$3',
      },
      '1': {
        fontSize: '$6',
      },
      '1': {
        fontSize: '$7',
      },
      '1': {
        fontSize: '$9',
      },
      '1': {
        fontSize: '$9',
      },
    },
  },
});

export const AvatarNestedItem = styled('div', {
  boxShadow: '0 0 0 2px $loContrast',
  borderRadius: '50%',
});

export const AvatarGroup = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
  [`${AvatarNestedItem}:nth-child(n+2)`]: {
    marginRight: '-$1',
  },
});

export function Avatar({
  alt,
  src,
  fallback,
  size = '2',
  shape = 'square',
  css,
  status,
  ...props
}: AvatarProps) {
  return (
    <Box
      css={{
        ...(css as any),
        position: 'relative',
        height: 'fit-content',
        width: 'fit-content',
      }}
    >
      <StyledAvatar {...props} size={size} shape={shape}>
        <AvatarImage alt={alt} src={src} />
        <AvatarFallback size={size}>{fallback}</AvatarFallback>
      </StyledAvatar>
      <Box
        css={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          boxShadow: '0 0 0 3px $loContrast',
          borderRadius: '$round',
          mr: '-3px',
          mb: '-3px',
        }}
      >
        {status && <Status size={size > 2 ? '2' : '1'} color={status} />}
      </Box>
    </Box>
  );
}
