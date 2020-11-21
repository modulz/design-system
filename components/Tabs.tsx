import React from 'react';
import { styled, StitchesProps } from '../stitches.config';
import {
  Tabs as TabsPrimitive,
  TabsProps as TabsPrimitiveProps,
  TabsListProps as TabsListPrimitiveProps,
  TabsTabProps as TabsTabPrimitiveProps,
  TabsPanelProps as TabsPanelPrimitiveProps,
} from '@interop-ui/react-tabs';
import { Separator } from './Separator';

export type TabsProps = TabsPrimitiveProps & StitchesProps<typeof StyledTabs>;
export type TabsTabProps = TabsTabPrimitiveProps & StitchesProps<typeof StyledTab>;
export type TabsListProps = TabsListPrimitiveProps & StitchesProps<typeof StyledTabsList>;
export type TabsPanelProps = TabsPanelPrimitiveProps & StitchesProps<typeof StyledTabsPanel>;

const StyledTabs = styled(TabsPrimitive, {
  display: 'flex',
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
  },
});

// Not able to use `forwardRef` here because then I can't add
// static props to it (eg: Tabs.List)
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757
// export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, forwardedRef) => (
//   <StyledTabs ref={forwardedRef} {...props} />
// ));

export function Tabs(props: TabsProps) {
  return <StyledTabs {...props} />;
}

const StyledTab = styled(TabsPrimitive.Tab, {
  position: 'relative',
  flexShrink: 0,
  height: '$6',
  display: 'inline-flex',
  lineHeight: 1,
  fontSize: '$2',
  px: '$3',
  userSelect: 'none',
  outline: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray900',

  '&:hover': {
    color: '$hiContrast',
  },

  '::after': {
    position: 'absolute',
    content: '""',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 2,
    backgroundColor: '$blue800',
    opacity: 0,
    transform: 'scaleX(.75)',
    transition: 'transform 175ms cubic-bezier(0.22, 1, 0.36, 1)',
  },

  '&[data-state="active"]': {
    color: '$hiContrast',
    '::after': {
      opacity: 1,
      transform: 'scaleX(1)',
    }
  },

  '&[data-orientation="vertical"]': {
    justifyContent: 'flex-start',

    '::after': {
      transform: 'scaleX(1)',
      transform: 'scaleY(.75)',
      transitionDuration: '350ms',
    },

    '&[data-state="active"]': {
      '::after': {
        bottom: 'auto',
        left: 'auto',
        right: 0,
        width: 2,
        height: '100%',
        '::after': {
          transform: 'scaleY(1)',
        }
      }
    },
  },
});

const Tab = React.forwardRef<HTMLDivElement, TabsTabProps>((props, forwardedRef) => (
  <StyledTab ref={forwardedRef} {...props} />
));

const StyledTabsList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
  borderBottom: '1px solid $gray500',

  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    borderBottom: 'none',
    borderRight: '1px solid $gray500',
  }
});

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>((props, forwardedRef) => (
  <>
    <StyledTabsList ref={forwardedRef} {...props} />
    <Separator />
  </>
));

const StyledTabsPanel = styled(TabsPrimitive.Panel, {
  flexGrow: 1,
  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $gray700, 0 0 0 1px $gray700',
  },
});

const TabsPanel = React.forwardRef<HTMLDivElement, TabsPanelProps>((props, forwardedRef) => (
  <StyledTabsPanel ref={forwardedRef} {...props} />
));

Tabs.Tab = Tab;
Tabs.List = TabsList;
Tabs.Panel = TabsPanel;
