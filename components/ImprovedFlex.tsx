import { styled, theme, utils } from '../stitches.config';
import { flexGapSupported } from './flexGapSupported';
import * as React from 'react';

// Base flex that will be used
// when gap is supported
const _Flex = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
});

const resolveUtils = (css, resolved?: any): any => {
  const resolvedUtils = resolved || { ...css };
  for (const key in resolveUtils) {
    const value = resolveUtils[key];
    if (typeof value)
      if (key in utils) {
        Object.assign(resolveUtils, utils[key](value, { tokens: theme, utils }));
      } else if (value && typeof value === 'object') {
        resolveUtils(value, resolvedUtils);
      }
  }
  return resolvedUtils;
};

// Old stitches types are bad so we're just casting until we start using the new fancy version
type Props = { css?: any; style?: React.CSSProperties };

export const ImprovedFlex = (React.forwardRef<HTMLDivElement, Props>(
  ({ css, children, style, ...props }, ref): JSX.Element => {
    const [shouldPolyfill, setShouldPolyfill] = React.useState(false);
    // make sure that the the shorthand utils are resolved into
    // real css properties so that the polyfill is able to detect
    // and redirect them to the correct area
    const rCss = resolveUtils(css);
    const gap = (rCss ? rCss.gap : undefined) as string | undefined;
    const columnGap = (rCss ? rCss.columnGap : undefined) as string | undefined;
    const rowGap = (rCss ? rCss.rowGap : undefined) as string | undefined;

    // when flexGap is not supported cause a re-render to render the polyfill
    // done this way to avoid defaulting to the polyfill on the server
    // so with this approach, the polyfill will be triggered on the client
    // only for browsers that don't support it

    React.useEffect(() => {
      // flex gap isn't supported
      console.log({ supported: flexGapSupported(), css, rCss });
      if (!flexGapSupported() && (gap || rowGap || columnGap)) {
        // trigger a re-render to polyfill
        setShouldPolyfill(true);
      } else {
        setShouldPolyfill(false);
      }
    }, [!flexGapSupported(), gap, rowGap, columnGap]);

    // Gap not supported
    if (shouldPolyfill) {
      const {
        display,
        flexDirection,
        flexWrap,
        flexFlow,
        justifyContent,
        alignItems,
        alignContent,
        ...restOfStyles
      } = rCss;
      return (
        /** Everything goes to the wrapper */
        <_Flex
          ref={ref}
          css={{
            ...restOfStyles,
          }}
          {...props}
        >
          {/** Except flex related stuff */}
          <_Flex
            //* stitches has a bug when trying to set custom properties as it mistakes them for vendor prefixed properties
            style={
              {
                '--gap': gap ? theme.space[gap] || gap : '0px',
                '--column-gap': columnGap ? theme.space[columnGap] || columnGap : 'var(--gap)',
                '--row-gap': rowGap ? theme.space[rowGap] || rowGap : 'var(--gap)',
              } as any
            }
            css={{
              flexDirection,
              flexWrap,
              flexFlow,
              justifyContent,
              alignItems,
              alignContent,
              // && for Injection oooordeeerrr
              // since atomic stitches has issues with guaranteeing the order
              '&& > *': {
                margin: 'calc(var(--row-gap) / 2) calc(var(--column-gap) / 2)',
              },
              // negative margin on the container to accommodate for margin added on the sides by the children
              margin: 'calc(var(--row-gap) / -2) calc(var(--column-gap) / -2)',
              // cix the container size
              width: 'calc(100%  + var(--column-gap))',
              height: 'calc(100% + calc(var(--row-gap) / 2 ))',
            }}
          >
            {children}
          </_Flex>
        </_Flex>
      );
    }
    return <_Flex {...props} children={children} css={rCss} />;
  }
) as any) as typeof _Flex;

export const Test = () => (
  <ImprovedFlex
    css={{ display: 'flex', gap: '20px', backgroundColor: '$gray300', flexWrap: 'wrap' }}
  >
    <ImprovedFlex
      css={{
        backgroundColor: '$blue400',
        width: 100,
        height: 100,
        gap: '20px',
        flexWrap: 'wrap',
      }}
    >
      <ImprovedFlex css={{ backgroundColor: '$blue600', width: 10, height: 10 }} />
      <ImprovedFlex css={{ backgroundColor: '$blue600', width: 10, height: 10 }} />
      <ImprovedFlex css={{ backgroundColor: '$blue600', width: 10, height: 10 }} />
      <ImprovedFlex css={{ backgroundColor: '$blue600', width: 10, height: 10 }} />
      <ImprovedFlex css={{ backgroundColor: '$blue600', width: 10, height: 10 }} />
      <ImprovedFlex css={{ backgroundColor: '$blue600', width: 10, height: 10 }} />
      <ImprovedFlex css={{ backgroundColor: '$blue600', width: 10, height: 10 }} />
      <ImprovedFlex css={{ backgroundColor: '$blue600', width: 10, height: 10 }} />
      <ImprovedFlex css={{ backgroundColor: '$blue600', width: 10, height: 10 }} />
      <ImprovedFlex css={{ backgroundColor: '$blue600', width: 10, height: 10 }} />
      <ImprovedFlex css={{ backgroundColor: '$blue600', width: 10, height: 10 }} />
      <ImprovedFlex css={{ backgroundColor: '$blue600', width: 10, height: 10 }} />
      <ImprovedFlex css={{ backgroundColor: '$blue600', width: 10, height: 10 }} />
      <ImprovedFlex css={{ backgroundColor: '$blue600', width: 10, height: 10 }} />
    </ImprovedFlex>
    <ImprovedFlex
      css={{
        backgroundColor: '$blue400',
        width: 100,
        height: 100,
        flexDirection: 'column',
      }}
    />
    <ImprovedFlex
      css={{
        backgroundColor: '$blue400',
        width: 400,
        height: 400,
        gap: '20px',
        flexDirection: 'column',
      }}
    >
      <ImprovedFlex css={{ gap: '60px' }}>
        <ImprovedFlex
          css={{
            backgroundColor: '$blue600',
            width: 100,
            height: 100,
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <ImprovedFlex css={{ backgroundColor: '$blue800', width: 10, height: 10 }} />
          <ImprovedFlex css={{ backgroundColor: '$blue800', width: 10, height: 10 }} />
          <ImprovedFlex css={{ backgroundColor: '$blue800', width: 10, height: 10 }} />
          <ImprovedFlex css={{ backgroundColor: '$blue800', width: 10, height: 10 }} />
          <ImprovedFlex css={{ backgroundColor: '$blue800', width: 10, height: 10 }} />
        </ImprovedFlex>
        <ImprovedFlex css={{ backgroundColor: '$blue600', width: 100, height: 100 }} />
        <ImprovedFlex css={{ backgroundColor: '$blue600', width: 100, height: 100 }} />
        <ImprovedFlex css={{ backgroundColor: '$blue600', width: 100, height: 100 }} />
        <ImprovedFlex css={{ backgroundColor: '$blue600', width: 100, height: 100 }} />
        <ImprovedFlex css={{ backgroundColor: '$blue600', width: 100, height: 100 }} />
        <ImprovedFlex css={{ backgroundColor: '$blue600', width: 100, height: 100 }} />
      </ImprovedFlex>
      <ImprovedFlex css={{ gap: '30px' }}>
        <ImprovedFlex css={{ backgroundColor: '$blue600', width: 100, height: 100 }} />
        <ImprovedFlex css={{ backgroundColor: '$blue600', width: 100, height: 100 }} />
        <ImprovedFlex css={{ backgroundColor: '$blue600', width: 100, height: 100 }} />
        <ImprovedFlex css={{ backgroundColor: '$blue600', width: 100, height: 100 }} />
      </ImprovedFlex>
      <ImprovedFlex css={{ gap: '20px' }}>
        <ImprovedFlex css={{ backgroundColor: '$blue600', width: 100, height: 100 }} />
        <ImprovedFlex css={{ backgroundColor: '$blue600', width: 100, height: 100 }} />
        <ImprovedFlex css={{ backgroundColor: '$blue600', width: 100, height: 100 }} />
        <ImprovedFlex css={{ backgroundColor: '$blue600', width: 100, height: 100 }} />
      </ImprovedFlex>
    </ImprovedFlex>
    <ImprovedFlex
      css={{
        backgroundColor: '$blue400',
        width: 100,
        height: 100,
        flexDirection: 'column',
      }}
    />
    <ImprovedFlex
      css={{
        backgroundColor: '$blue400',
        width: 100,
        height: 100,
        flexDirection: 'column',
      }}
    />
  </ImprovedFlex>
);

export default Test;
