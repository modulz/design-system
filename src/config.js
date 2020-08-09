import { createStyled } from '@stitches/styled';

const { styled, css } = createStyled({
  tokens: {
    colors: {
      hiContrast: "hsl(206,10%,5%)",
      loContrast: "white",
      bgsubtle: "hsl(206,22%,99%)",
      bg: "hsl(206,12%,97%)",
      line: "hsl(206,11%,92%)",
      border: "hsl(206,10%,84%)",
      borderHover: "hsl(206,10%,76%)",
      text: "hsl(206,10%,46%)",
      blue100: "hsl(206,100%,99%)",
      blue200: "hsl(206,100%,99%)",
      blue300: "hsl(206,80%,84%)",
      blue400: "hsl(206,94%,81%)",
      blue500: "hsl(206,100%,50%)",
      blue600: "hsl(206,100%,44%)",
      green100: "hsl(152,75%,99%)",
      green200: "hsl(152,75%,97%)",
      green300: "hsl(152,56%,86%)",
      green400: "hsl(152,56%,78%)",
      green500: "hsl(152,56%,75%)",
      green600: "hsl(152,56%,35%)",
      red100: "hsl(342,12%,5%)",
      red200: "hsl(342,12%,5%)",
      red300: "hsl(342,12%,5%)",
      red400: "hsl(342,12%,5%)",
      red500: "hsl(342,12%,5%)",
      red600: "hsl(342,75%,45%)",
      yellow100: "hsl(42,12%,5%)",
      yellow200: "hsl(42,12%,5%)",
      yellow300: "hsl(42,12%,5%)",
      yellow400: "hsl(42,12%,5%)",
      yellow500: "hsl(42,12%,5%)",
      yellow600: "hsl(42,12%,5%)",
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
    sizes: {
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
      round: '50%',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
  },
  screens: {
    bp1: (rule) => `@media (min-width: 520px) { ${rule} }`,
    bp2: (rule) => `@media (min-width: 900px) { ${rule} }`,
    bp3: (rule) => `@media (min-width: 1200px) { ${rule} }`,
    bp4: (rule) => `@media (min-width: 1800px) { ${rule} }`,
    motion: (rule) => `@media (prefers-reduced-motion) { ${rule} }`,
    hover: (rule) => `@media (hover: hover) { ${rule} }`,
    dark: (rule) => `@media (prefers-color-scheme: dark) { ${rule} }`,
    light: (rule) => `@media (prefers-color-scheme: light) { ${rule} }`,
  },
  utils: {
    p: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (config) => (value) => ({
      paddingTop: value,
    }),
    pr: (config) => (value) => ({
      paddingRight: value,
    }),
    pb: (config) => (value) => ({
      paddingBottom: value,
    }),
    pl: (config) => (value) => ({
      paddingLeft: value,
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
    mt: (config) => (value) => ({
      marginTop: value,
    }),
    mr: (config) => (value) => ({
      marginRight: value,
    }),
    mb: (config) => (value) => ({
      marginBottom: value,
    }),
    ml: (config) => (value) => ({
      marginLeft: value,
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

export const darkTheme = css.theme({
  colors: {
    hiContrast: "white",
    loContrast: "hsl(206,8%,7%)",
    bgsubtle: "hsl(206,8%,9%)",
    bg: "hsl(206,7%,12%)",
    line: "hsl(206,7%,14%)",
    border: "hsl(206,7%,24%)",
    borderHover: "hsl(206,7%,30%)",
    text: "hsl(206,5%,50%)",
  },
});

export { styled, css };
