import React from 'react';
import { styled, css, StitchesProps } from '../stitches.config';
import {
  Tabs as TabsPrimitive,
  styles,
  TabsProps as TabsPrimitiveProps,
  TabsListProps as TabsListPrimitiveProps,
  TabsTabProps as TabsTabPrimitiveProps,
  TabsPanelProps as TabsPanelPrimitiveProps,
} from '@interop-ui/react-tabs';

export type TabsProps = TabsPrimitiveProps & StitchesProps<typeof StyledTabs>;
export type TabsTabProps = TabsTabPrimitiveProps & StitchesProps<typeof StyledTab>;
export type TabsListProps = TabsListPrimitiveProps & StitchesProps<typeof StyledTabsList>;
export type TabsPanelProps = TabsPanelPrimitiveProps & StitchesProps<typeof StyledTabsPanel>;

const StyledTabs = styled('div', {
  ...styles.root,
});

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

  transition: 'background 200ms ease-out',
  borderRadius: '4px 4px 0 0',

  '&[data-state="active"]': {
    transitionDelay: '400ms',
    transitionDuration: '400ms',
  },

  '&:focus': {
    outline: 'none',
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
  <StyledTabsList ref={forwardedRef} {...props} />
));

const hide = css.keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
});
const show = css.keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

const StyledTabsPanel = styled(TabsPrimitive.Panel, {
  ...styles.tabPanel,
  padding: '$2',

  '&[data-state="inactive"]': {
    opacity: 0,
    display: 'block',
    animation: `${hide} 200ms ease-out forwards`,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  '&[data-state="active"]': {
    opacity: 0,
    animation: `${show} 400ms 400ms ease-out forwards`,
  },

  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $gray700, 0 0 0 1px $gray700',
  },
});

Tabs.Tab = Tab;
Tabs.List = TabsList;
Tabs.Panel = StyledTabsPanel;
