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
    $red300: 'hsl(351,94%,95%)',
    $red400: 'hsl(355,90%,85%)',
    $red500: 'hsl(353,90%,91%)',
    $red600: 'hsl(353,90%,76%)',
    $red700: 'hsl(357,100%,70%)',
    $red800: 'hsl(357,100%,62%)',
    $red900: 'hsl(357,79%,48%)',

    $crimson100: 'hsl(336,100%,98%)',
    $crimson200: 'hsl(336,94%,97%)',
    $crimson300: 'hsl(336,90%,91%)',
    $crimson400: 'hsl(336,90%,85%)',
    $crimson500: 'hsl(336,100%,85%)',
    $crimson600: 'hsl(336,79%,76%)',
    $crimson700: 'hsl(336,80%,70%)',
    $crimson800: 'hsl(336,100%,52%)',
    $crimson900: 'hsl(336,79%,48%)',

    $pink100: 'hsl(315,100%,99%)',
    $pink200: 'hsl(315,100%,98%)',
    $pink300: 'hsl(315,100%,94%)',
    $pink400: 'hsl(315,75%,84%)',
    $pink500: 'hsl(315,95%,83%)',
    $pink600: 'hsl(315,80%,76%)',
    $pink700: 'hsl(315,100%,70%)',
    $pink800: 'hsl(315,98%,54%)',
    $pink900: 'hsl(315,80%,53%)',

    $purple100: 'hsl(272,100%,99%)',
    $purple200: 'hsl(272,100%,98%)',
    $purple300: 'hsl(272,100%,94%)',
    $purple400: 'hsl(272,75%,87%)',
    $purple500: 'hsl(272,78%,85%)',
    $purple600: 'hsl(272,80%,75%)',
    $purple700: 'hsl(272,68%,70%)',
    $purple800: 'hsl(272,62%,47%)',
    $purple900: 'hsl(272,62%,44%)',

    $violet100: 'hsl(252,100%,99%)',
    $violet200: 'hsl(252,100%,98%)',
    $violet300: 'hsl(252,100%,94%)',
    $violet400: 'hsl(252,75%,84%)',
    $violet500: 'hsl(252,75%,84%)',
    $violet600: 'hsl(252,75%,75%)',
    $violet700: 'hsl(252,80%,70%)',
    $violet800: 'hsl(252,75%,58%)',
    $violet900: 'hsl(252,75%,53%)',

    $indigo100: 'hsl(226,100%,99%)',
    $indigo200: 'hsl(226,100%,98%)',
    $indigo300: 'hsl(226,100%,94%)',
    $indigo400: 'hsl(226,75%,84%)',
    $indigo500: 'hsl(226,78%,80%)',
    $indigo600: 'hsl(226,80%,75%)',
    $indigo700: 'hsl(226,75%,70%)',
    $indigo800: 'hsl(226,72%,54%)',
    $indigo900: 'hsl(226,70%,44%)',

    $blue100: 'hsl(206,100%,99%)',
    $blue200: 'hsl(206,100%,98%)',
    $blue300: 'hsl(206,100%,97%)',
    $blue400: 'hsl(206,100%,93%)',
    $blue500: 'hsl(206,100%,85%)',
    $blue600: 'hsl(206,100%,75%)',
    $blue700: 'hsl(206,100%,70%)',
    $blue800: 'hsl(206,100%,50%)',
    $blue900: 'hsl(211,100%,45%)',

    $turquoise100: 'hsl(186,100%,99%)',
    $turquoise200: 'hsl(186,100%,98%)',
    $turquoise300: 'hsl(186,100%,94%)',
    $turquoise400: 'hsl(186,85%,84%)',
    $turquoise500: 'hsl(186,85%,80%)',
    $turquoise600: 'hsl(186,75%,70%)',
    $turquoise700: 'hsl(186,75%,67%)',
    $turquoise800: 'hsl(186,100%,47%)',
    $turquoise900: 'hsl(186,100%,44%)',

    $teal100: 'hsl(174,100%,99%)',
    $teal200: 'hsl(174,100%,98%)',
    $teal300: 'hsl(174,100%,94%)',
    $teal400: 'hsl(174,75%,84%)',
    $teal500: 'hsl(174,78%,60%)',
    $teal600: 'hsl(174,60%,60%)',
    $teal700: 'hsl(174,60%,55%)',
    $teal800: 'hsl(174,100%,36%)',
    $teal900: 'hsl(174,100%,28%)',

    $green100: 'hsl(152,75%,98%)',
    $green200: 'hsl(152,72%,95%)',
    $green300: 'hsl(150,60%,86%)',
    $green400: 'hsl(150,60%,78%)',
    $green500: 'hsl(148,60%,60%)',
    $green600: 'hsl(148,58%,60%)',
    $green700: 'hsl(148,60%,57%)',
    $green800: 'hsl(148,70%,44%)',
    $green900: 'hsl(148,70%,44%)',

    $lime100: 'hsl(78,100%,98%)',
    $lime200: 'hsl(78,98%,95%)',
    $lime300: 'hsl(78,92%,86%)',
    $lime400: 'hsl(78,92%,74%)',
    $lime500: 'hsl(78,100%,65%)',
    $lime600: 'hsl(78,88%,60%)',
    $lime700: 'hsl(78,84%,55%)',
    $lime800: 'hsl(78,82%,50%)',
    $lime900: 'hsl(78,80%,44%)',

    $yellow100: 'hsl(42,100%,98%)',
    $yellow200: 'hsl(50,98%,95%)',
    $yellow300: 'hsl(52,92%,86%)',
    $yellow400: 'hsl(52,92%,74%)',
    $yellow500: 'hsl(52,100%,66%)',
    $yellow600: 'hsl(52,100%,60%)',
    $yellow700: 'hsl(52,100%,54%)',
    $yellow800: 'hsl(52,100%,50%)',
    $yellow900: 'hsl(52,100%,44%)',

    $orange100: 'hsl(36,100%,98%)',
    $orange200: 'hsl(36,100%,95%)',
    $orange300: 'hsl(36,100%,86%)',
    $orange400: 'hsl(36,92%,74%)',
    $orange500: 'hsl(36,93%,65%)',
    $orange600: 'hsl(36,100%,60%)',
    $orange700: 'hsl(36,100%,57%)',
    $orange800: 'hsl(36,100%,50%)',
    $orange900: 'hsl(36,100%,44%)',

    $gold100: 'hsl(36,90%,98%)',
    $gold200: 'hsl(36,90%,95%)',
    $gold300: 'hsl(36,80%,86%)',
    $gold400: 'hsl(36,80%,74%)',
    $gold500: 'hsl(36,50%,67%)',
    $gold600: 'hsl(36,40%,62%)',
    $gold700: 'hsl(36,40%,59%)',
    $gold800: 'hsl(36,40%,56%)',
    $gold900: 'hsl(36,26%,50%)',

    $brown100: 'hsl(30,80%,98%)',
    $brown200: 'hsl(30,80%,95%)',
    $brown300: 'hsl(30,60%,86%)',
    $brown400: 'hsl(30,60%,74%)',
    $brown500: 'hsl(30,42%,67%)',
    $brown600: 'hsl(30,40%,62%)',
    $brown700: 'hsl(30,40%,59%)',
    $brown800: 'hsl(30,50%,50%)',
    $brown900: 'hsl(30,50%,44%)',

    $bronze100: 'hsl(16,80%,98%)',
    $bronze200: 'hsl(16,80%,95%)',
    $bronze300: 'hsl(16,60%,86%)',
    $bronze400: 'hsl(16,60%,74%)',
    $bronze500: 'hsl(16,42%,67%)',
    $bronze600: 'hsl(16,40%,62%)',
    $bronze700: 'hsl(16,40%,59%)',
    $bronze800: 'hsl(16,38%,50%)',
    $bronze900: 'hsl(16,38%,44%)',
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
