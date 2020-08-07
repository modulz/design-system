import { createStyled } from '@stitches/styled';

export const { styled, css } = createStyled({
  tokens: {
    colors: {
      red100: "tomato",
      blue500: "blue",
      gray100: "hsl(205,25%,99%)",
      gray200: "hsl(205,15%,97%)",
      gray300: "hsl(205,12%,88%)",
      gray400: "hsl(205,10%,80%)",
      gray500: "hsl(205,10%,74%)",
      gray600: "hsl(205,10%,46%)",
      gray700: "hsl(205,10%,18%)",
      gray800: "hsl(205,10%,7%)",
      gray900: "hsl(205,12%,5%)",
      green100: "green",
      yellow100: "yellow",
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      9: '80px',
    },
    fontSizes: {
      1: '10px',
      2: '12px',
      3: '14px',
      4: '16px',
      5: '18px',
      6: '20px',
      7: '26px',
      8: '34px',
      9: '54px',
    },
    radii: {
      1: '4px',
      2: '8px',
      3: '16px',
    },
  },
  utils: {
    p: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    px: (config) => (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mx: (config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});
