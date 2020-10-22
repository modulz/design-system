import React from 'react';
import {
  Popover as PopoverPrimitive,
  PopoverProps as PopoverPrimitiveProps,
  PopoverPositionProps,
  styles,
} from '@interop-ui/react-popover';
import { Cross2Icon } from '@modulz/radix-icons';
import { Box } from './Box';
import { Panel } from './Panel';
import { IconButton } from './IconButton';

export type PopoverProps = PopoverPrimitiveProps & {
  children: React.ReactNode;
};

export function Popover({ children, ...props }: PopoverProps) {
  return <PopoverPrimitive {...props}>{children}</PopoverPrimitive>;
}

function PopoverContent({ children, ...props }: PopoverPositionProps) {
  return (
    <PopoverPrimitive.Position sideOffset={0} {...props}>
      <PopoverPrimitive.Content
        as={Panel}
        css={{
          width: 250,
          height: 150,
          padding: 20,
        }}
      >
        {children}
        <PopoverPrimitive.Close
          as={IconButton}
          variant="ghost"
          css={{ position: 'absolute', top: '$2', right: '$2' }}
        >
          <Cross2Icon />
        </PopoverPrimitive.Close>
      </PopoverPrimitive.Content>
      <Box css={{ color: '$panel' }}>
        <PopoverPrimitive.Arrow
          width={13}
          height={7}
          style={{ ...styles.arrow, fill: 'currentColor' }}
        />
      </Box>
    </PopoverPrimitive.Position>
  );
}

Popover.Trigger = PopoverPrimitive.Trigger;
Popover.Content = PopoverContent;
