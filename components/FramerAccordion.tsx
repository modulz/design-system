import React from 'react';
import { styled, StitchesProps } from '../stitches.config';
import {
  Accordion as AccordionPrimitive,
  styles,
  AccordionProps as AccordionPrimitiveProps,
  AccordionItemProps as AccordionPrimitiveItemProps,
  AccordionButtonProps as AccordionPrimitiveButtonProps,
  AccordionPanelProps as AccordionPrimitivePanelProps,
} from '@interop-ui/react-accordion';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { motion, AnimatePresence } from 'framer-motion';

export type AccordionProps = AccordionPrimitiveProps & StitchesProps<typeof StyledAccordion>;
export type AccordionItemProps = AccordionPrimitiveItemProps & StitchesProps<typeof StyledItem>;
export type AccordionButtonProps = AccordionPrimitiveButtonProps &
  StitchesProps<typeof StyledButton>;
export type AccordionPanelProps = AccordionPrimitivePanelProps & StitchesProps<typeof StyledPanel>;

const StyledAccordion = styled(AccordionPrimitive, {
  ...styles.root,
});

export function Accordion(props: AccordionProps) {
  return <StyledAccordion {...props} />;
}

const StyledItem = styled(AccordionPrimitive.Item, {
  ...styles.item,

  borderTop: '1px solid $gray700',

  '&:last-of-type': {
    borderBottom: '1px solid $gray700',
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  ...styles.header,
});

const StyledButton = styled(AccordionPrimitive.Button, {
  ...styles.button,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  p: '$2',
  color: '$hiContrast',

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
  ...styles.panel,
  p: '$2',
  my: '$2',
});

const Panel = React.forwardRef<HTMLDivElement, AccordionPanelProps>((props, forwardedRef) => {
  return (
    <StyledPanel ref={forwardedRef} {...props}>
      <AnimatePresence>
        <motion.div
          key={`panelcontent`}
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
        >
          {props.children}
        </motion.div>
      </AnimatePresence>
    </StyledPanel>
  );
});

Accordion.Item = StyledItem;
Accordion.Button = AccordionButton;
Accordion.Panel = Panel;
