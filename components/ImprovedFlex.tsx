import { styled, theme, utils, css } from '../stitches.config';
import { flexGapSupported } from './flexGapSupported';
import * as React from 'react';
import { Flex } from './Flex';
const atom = css({});

// only goes one level deep
const resolveUtils = (css) => {
  const resolved = { ...css };
  for (const key in resolved) {
    const element = resolved[key];
    if (key in utils) {
      Object.assign(resolved, utils[key](element, { tokens: theme, utils }));
    }
  }
  return resolved;
};

const Base = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
});

// Old stitches types are bad so we're just casting until we start using the new fancy version
type Props = { css?: any; style?: React.CSSProperties };

export const ImprovedFlex = (React.forwardRef<HTMLDivElement, Props>(
  ({ css, children, style, ...props }, ref): JSX.Element => {
    const rCss = resolveUtils(css);
    const gap = (rCss ? rCss.gap : undefined) as string | undefined;
    const columnGap = (rCss ? rCss.columnGap : undefined) as string | undefined;
    const rowGap = (rCss ? rCss.rowGap : undefined) as string | undefined;
    const [shouldPolyfill, setShouldPolyfill] = React.useState(false);

    // when flexGap is not supported cause a re-render to render the polyfill
    // done this way to avoid defaulting to the polyfill on the server
    // so with this approach, the poly fill will be triggered on the client
    // only for browsers that don't support it

    React.useEffect(() => {
      // flex gap isn't supported
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
        <Base
          ref={ref}
          css={{
            ...restOfStyles,
          }}
          {...props}
        >
          {/** Except flex related stuff */}
          <Base
            //* stitches has a bug when trying to set custom properties as it mistakes them for vendor prefixed properties
            style={
              {
                '--gap': gap ? theme.space[gap] || gap : '0px',
                '--column-gap': columnGap ? theme.space[columnGap] || columnGap : 'var(--gap)',
                '--row-gap': rowGap ? theme.space[rowGap] || rowGap : 'var(--gap)',
                margin: 'calc(var(--row-gap) / -2) calc(var(--column-gap) / -2)',
                width: 'calc(100%  + var(--column-gap))',
                height: 'calc(100% + calc(var(--row-gap) / 2 ))',
              } as any
            }
            className={atom}
            css={{
              flexDirection,
              flexWrap,
              flexFlow,
              justifyContent,
              alignItems,
              alignContent,
              // Injection oooordeeerrr
              '&& > *': {
                margin: 'calc(var(--row-gap) / 2) calc(var(--column-gap) / 2)',
              },
            }}
          >
            {children}
          </Base>
        </Base>
      );
    }

    return <Base {...props} children={children} css={rCss} />;
  }
) as any) as typeof Base;

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
