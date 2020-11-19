import React from 'react';
import { styled, css } from '../stitches.config';
import {
  Tooltip as TooltipPrimitive,
  TooltipProps as TooltipPrimitiveProps,
  TooltipPopperProps,
} from '@interop-ui/react-tooltip';
import { Box } from './Box';
import { Text } from './Text';

export type TooltipProps = TooltipPrimitiveProps &
  TooltipPopperProps & {
    children: React.ReactElement;
    content: React.ReactNode;
    multiline?: boolean;
  };

const fadeIn = css.keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const slideUp = css.keyframes({
  '0%': { transform: 'translateY(10px)' },
  '100%': { transform: 'translateY(0)' },
});

const slideDown = css.keyframes({
  '0%': { transform: 'translateY(-10px)' },
  '100%': { transform: 'translateY(0)' },
});

const slideRight = css.keyframes({
  '0%': { transform: 'translateX(-10px)' },
  '100%': { transform: 'translateX(0)' },
});

const slideLeft = css.keyframes({
  '0%': { transform: 'translateX(10px)' },
  '100%': { transform: 'translateX(0)' },
});

const Position = styled(TooltipPrimitive.Position, {
  '&[data-side=top]': {
    animation: `${fadeIn} 133ms ease-out, ${slideUp} 100ms ease-out`,
  },
  '&[data-side=bottom]': {
    animation: `${fadeIn} 133ms ease-out, ${slideDown} 100ms ease-out`,
  },
  '&[data-side=right]': {
    animation: `${fadeIn} 133ms ease-out, ${slideRight} 100ms ease-out`,
  },
  '&[data-side=left]': {
    animation: `${fadeIn} 133ms ease-out, ${slideLeft} 100ms ease-out`,
  },
});

const Content = styled(TooltipPrimitive.Content, {
  backgroundColor: '$transparentExtreme',
  borderRadius: '$1',
  padding: '$1 $2',

  variants: {
    multiline: {
      true: {
        maxWidth: 300,
      },
    },
  },
});

export function Tooltip({
  children,
  content,
  isOpen,
  defaultIsOpen,
  onIsOpenChange,
  multiline,
  ...props
}: TooltipProps) {
  return (
    <TooltipPrimitive isOpen={isOpen} defaultIsOpen={defaultIsOpen} onIsOpenChange={onIsOpenChange}>
      <TooltipPrimitive.Trigger
        as={React.forwardRef((props, forwardedRef) =>
          React.cloneElement(children, { ...props, ref: forwardedRef })
        )}
      />
      <Position side="top" align="center" {...props}>
        <Content multiline={multiline}>
          <Text
            size="1"
            as="p"
            css={{
              color: '$loContrast',
              lineHeight: multiline ? '1.5' : undefined,
            }}
          >
            {content}
          </Text>
        </Content>

        <Box css={{ color: '$transparentExtreme' }}>
          <TooltipPrimitive.Arrow
            offset={5}
            width={11}
            height={5}
            style={{
              // ...styles.arrow,
              fill: 'currentColor',
            }}
          />
        </Box>
      </Position>
    </TooltipPrimitive>
  );
}
