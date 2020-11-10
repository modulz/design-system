import React from 'react';
import { styled, css } from '../stitches.config';
import {
  Tooltip as TooltipPrimitive,
  styles,
  TooltipProps as TooltipPrimitiveProps,
  TooltipPositionProps,
} from '@interop-ui/react-tooltip';
import { Box } from './Box';
import { Text } from './Text';

export type TooltipProps = TooltipPrimitiveProps &
  TooltipPositionProps & {
    children: React.ReactElement;
    content: React.ReactNode;
  };

export function Tooltip({
  children,
  content,
  isOpen,
  defaultIsOpen,
  onIsOpenChange,
  ...props
}: TooltipProps) {
  return (
    <TooltipPrimitive isOpen={isOpen} defaultIsOpen={defaultIsOpen} onIsOpenChange={onIsOpenChange}>
      <TooltipPrimitive.Trigger
        as={React.forwardRef((props, forwardedRef) =>
          React.cloneElement(children, { ...props, ref: forwardedRef })
        )}
      />
      <TooltipPrimitive.Position side="top" align="center" sideOffset={0} {...props}>
        <TooltipPrimitive.Content>
          <Box
            css={{
              backgroundColor: '$hiContrast',
              borderRadius: '$2',
              padding: '$1 $2',
              maxWidth: 300,
            }}
          >
            <Text
              size="1"
              as="p"
              css={{
                lineHeight: '17px',
                color: '$loContrast',
              }}
            >
              {content}
            </Text>
          </Box>
        </TooltipPrimitive.Content>

        <Box css={{ color: '$hiContrast' }}>
          <TooltipPrimitive.Arrow
            offset={0}
            width={13}
            height={7}
            style={{
              ...styles.arrow,
              fill: 'currentColor',
            }}
          />
        </Box>
      </TooltipPrimitive.Position>
    </TooltipPrimitive>
  );
}
