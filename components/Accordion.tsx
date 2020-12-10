import React from 'react';
import { styled, StitchesProps } from '../stitches.config';
import * as AccordionPrimitive from '@interop-ui/react-accordion';
import { forwardRefWithAs } from '@interop-ui/react-polymorphic';
import { ChevronDownIcon } from '@modulz/radix-icons';

const Root = styled(AccordionPrimitive.Root, {});

const Item = styled(AccordionPrimitive.Item, {
  borderTop: '1px solid $gray500',

  '&:last-of-type': {
    borderBottom: '1px solid $gray500',
  },
});

const Header = styled(AccordionPrimitive.Header, {});

const Button = styled(AccordionPrimitive.Button, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  p: '$2',
  color: '$hiContrast',
  width: '100%',

  '&:hover': {
    backgroundColor: '$gray100',
  },

  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $gray700, 0 0 0 1px $gray700',
  },

  svg: {
    transition: 'transform 175ms cubic-bezier(0.65, 0, 0.35, 1)',
  },

  // TODO: check if there should be a data-state attr
  '&[aria-expanded="true"]': {
    svg: {
      transform: 'rotate(180deg)',
    },
  },
});

const Panel = styled(AccordionPrimitive.Panel, {
  p: '$2',
});

const AccordionButton = forwardRefWithAs<typeof AccordionPrimitive.Button>(
  ({ children, ...props }, forwardedRef) => (
    <Header>
      <Button ref={forwardedRef} {...props}>
        {children}
        <ChevronDownIcon />
      </Button>
    </Header>
  )
);

const AccordionPackage = Object.assign(Root, {
  Item,
  Button: AccordionButton,
  Panel,
});

export { AccordionPackage as Accordion };
