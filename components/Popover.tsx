import React from 'react';
import { styled, StitchesProps, css } from '../stitches.config';
import {
  Popover as PopoverPrimitive,
  PopoverProps as PopoverPrimitiveProps,
  PopoverPositionProps,
  PopoverCloseProps as PopoverPrimitiveCloseProps,
  styles,
} from '@interop-ui/react-popover';
import { Cross2Icon } from '@modulz/radix-icons';
import { Box } from './Box';
import { Panel } from './Panel';
import { IconButton } from './IconButton';

export type { PopoverTriggerProps } from '@interop-ui/react-popover';
export type PopoverProps = PopoverPrimitiveProps & {
  children: React.ReactNode;
};
export type PopoverContentProps = PopoverPositionProps & StitchesProps<typeof Content>;
export type PopoverCloseProps = PopoverPrimitiveCloseProps & StitchesProps<typeof Close>;

export function Popover({ children, ...props }: PopoverProps) {
  return <PopoverPrimitive {...props}>{children}</PopoverPrimitive>;
}

const fadeIn = css.keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const moveDown = css.keyframes({
  '0%': { transform: 'translateY(-10px)' },
  '100%': { transform: 'translateY(0)' },
});

const Position = styled(PopoverPrimitive.Position, {
  '&:focus': {
    outline: 'none',
  },
});

const Content = styled(PopoverPrimitive.Content, {
  ...styles.content,
  minWidth: 200,
  maxWidth: 'fit-content',
  padding: '$4',

  '&:focus': {
    outline: 'none',
  },
});

const Close = styled(PopoverPrimitive.Close, {
  ...styles.close,
});

const Wrapper = styled('div', {
  animation: `${fadeIn} 333ms ease-out, ${moveDown} 133ms ease-out`,
});

const Arrow = styled(PopoverPrimitive.Arrow, {
  ...styles.arrow,
  fill: 'currentColor',
});

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Position>,
  PopoverContentProps
>(({ children, ...props }, fowardedRef) => (
  <Position sideOffset={0} {...props} ref={fowardedRef}>
    <Wrapper>
      <Content as={Panel}>
        {children}
        <Close
          as={IconButton}
          variant="ghost"
          css={{ position: 'absolute', top: '$1', right: '$1' }}
        >
          <Cross2Icon />
        </Close>
      </Content>
      <Box css={{ color: '$panel' }}>
        <Arrow width={13} height={7} />
      </Box>
    </Wrapper>
  </Position>
));

Popover.Trigger = PopoverPrimitive.Trigger;
Popover.Content = PopoverContent;
Popover.Close = PopoverPrimitive.Close;
