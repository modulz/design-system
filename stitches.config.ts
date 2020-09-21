import { createStyled } from '@stitches/react';

export const theme = {
  colors: {
    $hiContrast: 'hsl(206,10%,5%)',
    $loContrast: 'white',

    $canvas: 'hsl(0,0%,93%)',

    $gray100: 'hsl(206,22%,99%)',
    $gray200: 'hsl(206,12%,97%)',

    $gray300: 'hsl(206,12%,95%)',
    $gray400: 'hsl(206,12%,93%)',
    
    $gray500: 'hsl(206,11%,92%)',
    $gray600: 'hsl(206,10%,84%)',
    $gray700: 'hsl(206,10%,76%)',
    $gray800: 'hsl(206,10%,54%)',
    $gray900: 'hsl(206,10%,44%)',

    $red100: 'hsl(351,100%,98%)',
    $red200: 'hsl(351,94%,97%)',
    $red300: 'hsl(353,90%,91%)',
    $red400: 'hsl(355,90%,85%)',
    $red500: 'hsl(357,100%,62%)',
    $red600: 'hsl(357,79%,48%)',
    $red700: 'hsl(357,10%,44%)',
    $red800: 'hsl(357,10%,40%)',
    $red900: 'hsl(357,10%,30%)',

    $crimson100: 'hsl(340,100%,98%)',
    $crimson200: 'hsl(340,94%,97%)',
    $crimson300: 'hsl(340,90%,91%)',
    $crimson400: 'hsl(340,90%,85%)',
    $crimson500: 'hsl(340,100%,62%)',
    $crimson600: 'hsl(340,79%,48%)',
    $crimson700: 'hsl(340,10%,44%)',
    $crimson800: 'hsl(340,10%,40%)',
    $crimson900: 'hsl(340,10%,30%)',

    $pink100: 'hsl(320,100%,99%)',
    $pink200: 'hsl(320,100%,98%)',
    $pink300: 'hsl(320,100%,94%)',
    $pink400: 'hsl(320,75%,84%)',
    $pink500: 'hsl(320,95%,60%)',
    $pink600: 'hsl(320,80%,53%)',
    $pink700: 'hsl(320,10%,44%)',
    $pink800: 'hsl(320,10%,44%)',
    $pink900: 'hsl(320,10%,44%)',

    $purple100: 'hsl(280,100%,99%)',
    $purple200: 'hsl(280,100%,98%)',
    $purple300: 'hsl(280,100%,94%)',
    $purple400: 'hsl(280,75%,84%)',
    $purple500: 'hsl(280,78%,60%)',
    $purple600: 'hsl(280,80%,53%)',
    $purple700: 'hsl(280,10%,44%)',
    $purple800: 'hsl(280,10%,44%)',
    $purple900: 'hsl(280,10%,44%)',

    $violet100: 'hsl(252,100%,99%)',
    $violet200: 'hsl(252,100%,98%)',
    $violet300: 'hsl(252,100%,94%)',
    $violet400: 'hsl(252,75%,84%)',
    $violet500: 'hsl(252,78%,60%)',
    $violet600: 'hsl(252,80%,53%)',
    $violet700: 'hsl(252,10%,44%)',
    $violet800: 'hsl(252,10%,44%)',
    $violet900: 'hsl(252,10%,44%)',

    $indigo100: 'hsl(226,100%,99%)',
    $indigo200: 'hsl(226,100%,98%)',
    $indigo300: 'hsl(226,100%,94%)',
    $indigo400: 'hsl(226,75%,84%)',
    $indigo500: 'hsl(226,78%,60%)',
    $indigo600: 'hsl(226,80%,53%)',
    $indigo700: 'hsl(226,10%,44%)',
    $indigo800: 'hsl(226,10%,44%)',
    $indigo900: 'hsl(226,10%,44%)',

    $blue100: 'hsl(206,100%,99%)',
    $blue200: 'hsl(206,100%,98%)',
    $blue300: 'hsl(206,100%,97%)',
    $blue400: 'hsl(206,100%,93%)',
    $blue500: 'hsl(206,100%,92%)',
    $blue600: 'hsl(206,100%,47%)',
    $blue700: 'hsl(206,10%,44%)',
    $blue800: 'hsl(206,100%,50%)',
    $blue900: 'hsl(206,100%,47%)',

    $teal100: 'hsl(170,100%,99%)',
    $teal200: 'hsl(170,100%,98%)',
    $teal300: 'hsl(170,100%,94%)',
    $teal400: 'hsl(170,75%,84%)',
    $teal500: 'hsl(170,78%,60%)',
    $teal600: 'hsl(170,100%,35%)',
    $teal700: 'hsl(170,30%,44%)',
    $teal800: 'hsl(170,20%,44%)',
    $teal900: 'hsl(170,10%,44%)',

    $turquoise100: 'hsl(186,100%,99%)',
    $turquoise200: 'hsl(186,100%,98%)',
    $turquoise300: 'hsl(186,100%,94%)',
    $turquoise400: 'hsl(186,75%,84%)',
    $turquoise500: 'hsl(186,78%,60%)',
    $turquoise600: 'hsl(186,80%,53%)',
    $turquoise700: 'hsl(186,10%,44%)',
    $turquoise800: 'hsl(186,10%,44%)',
    $turquoise900: 'hsl(186,10%,44%)',

    $green100: 'hsl(152,75%,98%)',
    $green200: 'hsl(152,72%,95%)',
    $green300: 'hsl(150,60%,86%)',
    $green400: 'hsl(150,60%,78%)',
    $green500: 'hsl(148,60%,60%)',
    $green600: 'hsl(148,58%,32%)',
    $green700: 'hsl(206,10%,44%)',
    $green800: 'hsl(206,10%,44%)',
    $green900: 'hsl(206,10%,44%)',

    $lime100: 'hsl(100,100%,98%)',
    $lime200: 'hsl(100,98%,95%)',
    $lime300: 'hsl(100,92%,86%)',
    $lime400: 'hsl(100,92%,74%)',
    $lime500: 'hsl(100,100%,49%)',
    $lime600: 'hsl(100,54%,36%)',
    $lime700: 'hsl(100,10%,44%)',
    $lime800: 'hsl(100,10%,44%)',
    $lime900: 'hsl(100,10%,44%)',

    $yellow100: 'hsl(42,100%,98%)',
    $yellow200: 'hsl(50,98%,95%)',
    $yellow300: 'hsl(52,92%,86%)',
    $yellow400: 'hsl(52,92%,74%)',
    $yellow500: 'hsl(52,100%,49%)',
    $yellow600: 'hsl(42,54%,36%)',
    $yellow700: 'hsl(206,10%,44%)',
    $yellow800: 'hsl(206,10%,44%)',
    $yellow900: 'hsl(206,10%,44%)',

    $orange100: 'hsl(36,100%,98%)',
    $orange360: 'hsl(36,98%,95%)',
    $orange300: 'hsl(36,92%,86%)',
    $orange400: 'hsl(36,92%,74%)',
    $orange500: 'hsl(36,100%,49%)',
    $orange600: 'hsl(36,54%,36%)',
    $orange700: 'hsl(36,10%,44%)',
    $orange800: 'hsl(36,10%,44%)',
    $orange900: 'hsl(36,10%,44%)',

    $gold100: 'hsl(31,90%,98%)',
    $gold120: 'hsl(31,90%,95%)',
    $gold300: 'hsl(31,80%,86%)',
    $gold400: 'hsl(31,80%,74%)',
    $gold500: 'hsl(31,50%,49%)',
    $gold600: 'hsl(31,40%,36%)',
    $gold700: 'hsl(31,40%,44%)',
    $gold800: 'hsl(31,30%,44%)',
    $gold900: 'hsl(31,30%,44%)',

    $bronze100: 'hsl(12,80%,98%)',
    $bronze200: 'hsl(12,80%,95%)',
    $bronze300: 'hsl(12,60%,86%)',
    $bronze400: 'hsl(12,60%,74%)',
    $bronze500: 'hsl(12,42%,49%)',
    $bronze600: 'hsl(12,40%,36%)',
    $bronze700: 'hsl(12,40%,44%)',
    $bronze800: 'hsl(12,30%,44%)',
    $bronze900: 'hsl(12,30%,44%)',
  },
  fonts: {
    $untitled: 'Untitled Sans, apple-system, BlinkMacSystemFont, sans-serif',
    $mono: 'Söhne Mono, menlo, monospace',
  },
  space: {
    $1: '5px',
    $2: '10px',
    $3: '15px',
    $4: '20px',
    $5: '25px',
    $6: '35px',
    $7: '45px',
    $8: '65px',
    $9: '80px',
  },
  sizes: {
    $1: '5px',
    $2: '10px',
    $3: '15px',
    $4: '20px',
    $5: '25px',
    $6: '35px',
    $7: '45px',
    $8: '65px',
    $9: '80px',
  },
  fontSizes: {
    $1: '12px',
    $2: '13px',
    $3: '15px',
    $4: '17px',
    $5: '19px',
    $6: '21px',
    $7: '27px',
    $8: '35px',
    $9: '59px',
  },
  radii: {
    $1: '3px',
    $2: '5px',
    $3: '15px',
    $round: '50%',
    $pill: '9999px',
  },
  zIndices: {
    $1: '100',
    $2: '200',
    $3: '300',
    $4: '400',
    $max: '999',
  },
};

export const darkTheme = {
  $hiContrast: 'hsl(206,2%,93%)',
  $loContrast: 'hsl(206,8%,8%)',

  $canvas: 'hsl(0,0%,15%)',

  $gray100: 'hsl(206,8%,12%)',
  $gray200: 'hsl(206,7%,14%)',
  $gray300: 'hsl(206,7%,15%)',
  $gray400: 'hsl(206,7%,24%)',
  $gray500: 'hsl(206,7%,30%)',
  $gray600: 'hsl(206,5%,53%)',

  $blue100: 'hsl(212,100%,10%)',
  $blue200: 'hsl(212,42%,12%)',
  $blue300: 'hsl(211,55%,16%)',
  $blue400: 'hsl(209,100%,84%)',
  $blue500: 'hsl(206,100%,50%)',
  $blue600: 'hsl(206,100%,60%)',

  $violet100: 'hsl(252,50%,10%)',
  $violet200: 'hsl(252,22%,14%)',
  $violet300: 'hsl(252,33%,20%)',
  $violet400: 'hsl(252,75%,84%)',
  $violet500: 'hsl(252,78%,60%)',
  $violet600: 'hsl(252,78%,71%)',

  $green100: 'hsl(152,75%,8%)',
  $green200: 'hsl(152,72%,11%)',
  $green300: 'hsl(150,60%,20%)',
  $green400: 'hsl(150,60%,40%)',
  $green500: 'hsl(148,60%,50%)',
  $green600: 'hsl(148,58%,60%)',

  $red100: 'hsl(346,100%,8%)',
  $red200: 'hsl(346,94%,13%)',
  $red300: 'hsl(348,90%,20%)',
  $red400: 'hsl(350,90%,40%)',
  $red500: 'hsl(352,100%,50%)',
  $red600: 'hsl(352,79%,65%)',

  $yellow100: 'hsl(52,50%,10%)',
  $yellow200: 'hsl(52,22%,14%)',
  $yellow300: 'hsl(52,33%,20%)',
  $yellow400: 'hsl(52,75%,78%)',
  $yellow500: 'hsl(52,78%,45%)',
  $yellow600: 'hsl(52,90%,45%)',
} as const;

export const { styled, css } = createStyled({
  tokens: theme,
  breakpoints: {
    default: (rule) => rule,
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
    p: (value) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value) => ({
      paddingTop: value,
    }),
    pr: (value) => ({
      paddingRight: value,
    }),
    pb: (value) => ({
      paddingBottom: value,
    }),
    pl: (value) => ({
      paddingLeft: value,
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value) => ({
      marginTop: value,
    }),
    mr: (value) => ({
      marginRight: value,
    }),
    mb: (value) => ({
      marginBottom: value,
    }),
    ml: (value) => ({
      marginLeft: value,
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value) => ({ textAlign: value }),

    fd: (value) => ({ flexDirection: value }),
    fw: (value) => ({ flexWrap: value }),

    ai: (value) => ({ alignItems: value }),
    ac: (value) => ({ alignContent: value }),
    jc: (value) => ({ justifyContent: value }),
    as: (value) => ({ alignSelf: value }),
    fg: (value) => ({ flexGrow: value }),
    fs: (value) => ({ flexShrink: value }),
    fb: (value) => ({ flexBasis: value }),

    bc: (value: keyof typeof theme['colors'] | (string & {})) => ({
      backgroundColor: value,
    }),
    //
    // br: (value: keyof typeof theme['radii'] | (string & {})) => ({
    //   borderRadius: value,
    // }),
    // btrr: (value: keyof typeof theme['radii'] | (string & {})) => ({
    //   borderTopRightRadius: value,
    // }),
    // bbrr: (value: keyof typeof theme['radii'] | (string & {})) => ({
    //   borderBottomRightRadius: value,
    // }),
    // bblr: (value: keyof typeof theme['radii'] | (string & {})) => ({
    //   borderBottomLeftRadius: value,
    // }),
    // btlr: (value: keyof typeof theme['radii'] | (string & {})) => ({
    //   borderTopLeftRadius: value,
    // }),

    bs: (value) => ({ boxShadow: value }),

    lh: (value) => ({ lineHeight: value }),

    ox: (value) => ({ overflowX: value }),
    oy: (value) => ({ overflowY: value }),

    pe: (value) => ({ pointerEvents: value }),
    us: (value) => ({ userSelect: value }),

    // size: (value: keyof typeof theme['sizes'] | (string & {})) => ({
    //   width: value,
    //   height: value,
    // }),

    linearGradient: (value) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});

export const darkThemeClass = css.theme({ colors: darkTheme });
