import React from 'react';
import { styled, StitchesProps } from '../stitches.config';
import {
  Tabs as TabsPrimitive,
  styles,
  TabsProps as TabsPrimitiveProps,
  TabsListProps as TabsListPrimitiveProps,
  TabsTabProps as TabsTabPrimitiveProps,
  TabsPanelProps as TabsPanelPrimitiveProps,
} from '@interop-ui/react-tabs';
import { Separator } from './Separator';
import { Text } from './Text';

export type TabsProps = TabsPrimitiveProps & StitchesProps<typeof StyledTabs>;
export type TabsTabProps = TabsTabPrimitiveProps & StitchesProps<typeof StyledTab>;
export type TabsListProps = TabsListPrimitiveProps & StitchesProps<typeof StyledTabsList>;
export type TabsPanelProps = TabsPanelPrimitiveProps & StitchesProps<typeof StyledTabsPanel>;

const StyledTabs = styled('div', { ...styles.root });

// Not able to use `forwardRef` here because then I can't add
// static props to it (eg: Tabs.List)
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757
// export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, forwardedRef) => (
//   <TabsPrimitive as={StyledTabs} ref={forwardedRef} {...props} />
// ));

export function Tabs(props: TabsProps) {
  return <TabsPrimitive as={StyledTabs} {...props} />;
}

const StyledTab = styled(TabsPrimitive.Tab, {
  ...styles.tab,
  height: '$5',
  display: 'inline-flex',
  lineHeight: 1,
  px: '$2',
  userSelect: 'none',
  alignItems: 'center',
  justifyContent: 'center',

  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $gray700, 0 0 0 1px $gray700',
  },

  '&[data-state="active"]': {
    boxShadow: '0 1px 0 0 $gray900',
  },
});

const Tab = React.forwardRef<HTMLDivElement, TabsTabProps>((props, forwardedRef) => (
  <StyledTab ref={forwardedRef} {...props} />
));

const StyledTabsList = styled(TabsPrimitive.List, {
  ...styles.tabList,
  display: 'flex',
});

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>((props, forwardedRef) => (
  <>
    <StyledTabsList ref={forwardedRef} {...props} />
    <Separator />
  </>
));

const StyledTabsPanel = styled(TabsPrimitive.Panel, {
  ...styles.tabPanel,
  padding: '$2',
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
