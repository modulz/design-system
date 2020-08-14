import { createStyled } from '@stitches/styled';

const { styled, css } = createStyled({
  tokens: {
    colors: {
      hiContrast: "hsl(206,10%,5%)",
      loContrast: "white",
      gray100: "hsl(206,22%,99%)",
      gray200: "hsl(206,12%,97%)",
      gray300: "hsl(206,11%,92%)",
      gray400: "hsl(206,10%,84%)",
      gray500: "hsl(206,10%,76%)",
      gray600: "hsl(206,10%,44%)",
      blue100: "hsl(206,100%,98%)",
      blue200: "hsl(206,100%,96%)",
      blue300: "hsl(206,100%,95%)",
      blue400: "hsl(206,100%,94%)",
      blue500: "hsl(206,100%,50%)",
      blue600: "hsl(206,100%,40%)",
      green100: "hsl(152,75%,98%)",
      green200: "hsl(152,75%,96%)",
      green300: "hsl(152,56%,86%)",
      green400: "hsl(152,56%,78%)",
      green500: "hsl(152,56%,45%)",
      green600: "hsl(152,57%,33%)",
      red100: "hsl(342,100%,98%)",
      red200: "hsl(342,100%,96%)",
      red300: "hsl(342,100%,86%)",
      red400: "hsl(342,90%,78%)",
      red500: "hsl(342,80%,45%)",
      red600: "hsl(342,68%,48%)",
      yellow100: "hsl(52,100%,98%)",
      yellow200: "hsl(52,100%,96%)",
      yellow300: "hsl(52,100%,86%)",
      yellow400: "hsl(52,80%,78%)",
      yellow500: "hsl(52,80%,45%)",
      yellow600: "hsl(52,50%,34%)",
    },
    fonts: {
      untitled: 'Untitled Sans, apple-system, BlinkMacSystemFont, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    fontSizes: {
      1: '11px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '27px',
      8: '35px',
      9: '59px',
    },
    radii: {
      1: '3px',
      2: '5px',
      3: '15px',
      round: '50%',
      pill: '9999px',
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
    loContrast: "hsl(206,8%,8%)",
    gray100: "hsl(206,8%,9%)",
    gray200: "hsl(206,7%,12%)",
    gray300: "hsl(206,7%,15%)",
    gray400: "hsl(206,7%,24%)",
    gray500: "hsl(206,7%,30%)",
    gray600: "hsl(206,5%,50%)",
  },
});

export { styled, css };
