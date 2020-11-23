import React from 'react';
import { styled, StitchesProps, StitchesVariants } from '../stitches.config';
import {
  Slider as SliderPrimitive,
  SliderProps as SliderPrimitiveProps,
} from '@interop-ui/react-slider';

export type SliderProps = SliderPrimitiveProps &
  StitchesProps<typeof StyledSlider> & {
    alt?: string;
  };
export type SliderVariants = StitchesVariants<typeof StyledSlider>;

const SliderTrack = styled(SliderPrimitive.Track, {
  position: 'relative',
  flexGrow: 1,
  backgroundColor: '$gray600',
  borderRadius: '$pill',
  '&[data-orientation="horizontal"]': {
    height: 2,
  },
  '&[data-orientation="vertical"]': {
    width: 4,
    height: 300,
  },
});

const SliderRange = styled(SliderPrimitive.Range, {
  position: 'absolute',
  background: '$blue800',
  borderRadius: 'inherit',
  '&[data-orientation="horizontal"]': {
    height: '100%',
  },
  '&[data-orientation="vertical"]': {
    width: '100%',
  },
});

const SliderThumb = styled(SliderPrimitive.Thumb, {
  position: 'relative',
  display: 'block',
  width: 15,
  height: 15,
  outline: 'none',
  opacity: '0',

  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -2,
    backgroundColor: 'hsla(0,0%,0%,.035)',
    transform: 'scale(1)',
    borderRadius: '$round',
    transition: 'transform 100ms cubic-bezier(0.22, 1, 0.36, 1)',
  },

  ':focus': {
    '::after': {
      transform: 'scale(2)',
    },
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '$round',
    width: 15,
    height: 15,
    backgroundColor: 'white',
    boxShadow: '0 0 1px rgba(0,0,0,.3), 0 1px 4px rgba(0,0,0,.15)',
    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 0 2px red',
    },
  },
});

export const StyledSlider = styled(SliderPrimitive, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  userSelect: 'none',
  touchAction: 'none',
  height: 15,

  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: 15,
  },

  variants: {
    color: {
      gray: {
        //
      },
    },
  },

  ':hover': {
    [`& ${SliderTrack}`]: {
      backgroundColor: '$gray700',
    },
    [`& ${SliderThumb}`]: {
      opacity: '1',
    },
  },
});

export function Slider({ color = 'gray', ...props }: SliderProps) {
  return (
    <StyledSlider color={color} {...props}>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb />
    </StyledSlider>
  );
}
