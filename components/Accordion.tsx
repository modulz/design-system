import React from 'react';
import { styled, StitchesProps } from '../stitches.config';
import {
  Accordion as AccordionPrimitive,
  AccordionProps as AccordionPrimitiveProps,
  AccordionItemProps as AccordionPrimitiveItemProps,
  AccordionButtonProps as AccordionPrimitiveButtonProps,
  AccordionPanelProps as AccordionPrimitivePanelProps,
} from '@interop-ui/react-accordion';
import { ChevronDownIcon } from '@modulz/radix-icons';

export type AccordionProps = AccordionPrimitiveProps & StitchesProps<typeof StyledAccordion>;
export type AccordionItemProps = AccordionPrimitiveItemProps & StitchesProps<typeof StyledItem>;
export type AccordionButtonProps = AccordionPrimitiveButtonProps &
  StitchesProps<typeof StyledButton>;
export type AccordionPanelProps = AccordionPrimitivePanelProps & StitchesProps<typeof StyledPanel>;

const StyledAccordion = styled(AccordionPrimitive, {
  maxWidth: '20em',
});

export function Accordion(props: AccordionProps) {
  return <StyledAccordion {...props} />;
}

const StyledItem = styled(AccordionPrimitive.Item, {
  borderBottom: '1px solid purple',

  '&:last-of-type': {
    borderBottom: '1px solid $gray700',
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  margin: 0,
});

const StyledButton = styled(AccordionPrimitive.Button, {
  width: '100%',
  boxSizing: 'border-box',
  appearance: 'none',
  border: 'none',
  padding: 10,
  backgroundColor: 'black',
  color: 'white',
  fontFamily: 'inherit',
  fontSize: '1.2em',

  '&:hover': {
    backgroundColor: '$gray200',
  },

  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $gray700, 0 0 0 1px $gray700',
  },

  // TODO: check if there should be a data-state attr
  '&[aria-expanded="true"]': {
    svg: {
      transform: 'rotate(180deg)',
    },
  },
});

export const AccordionButton = React.forwardRef<HTMLButtonElement, AccordionButtonProps>(
  ({ children }, forwardedRef) => (
    <StyledHeader>
      <StyledButton ref={forwardedRef}>
        {children}
        <ChevronDownIcon />
      </StyledButton>
    </StyledHeader>
  )
);

const StyledPanel = styled(AccordionPrimitive.Panel, {
  padding: 10,
  lineHeight: 1.5,
});

Accordion.Item = StyledItem;
Accordion.Button = AccordionButton;
Accordion.Panel = StyledPanel;
