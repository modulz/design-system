import React from 'react';
import Head from 'next/head';
import '../styles.css';
import { darkThemeClass } from '../stitches.config';
import { SwitchIcon } from '@modulz/radix-icons';
import { IconButton } from '../components/IconButton';

function App({ Component, pageProps }) {
  const [theme, setTheme] = React.useState(darkThemeClass);

  return (
    <div className={theme}>
      <Head>
        <title>Design System</title>
        <link rel="stylesheet" href="https://core.modulz.app/fonts/fonts.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} />

      <IconButton
        style={{ position: 'fixed', zIndex: 999, left: 15, bottom: 15 }}
        onClick={() => setTheme(theme ? undefined : darkThemeClass)}
      >
        <SwitchIcon />
      </IconButton>
    </div>
  );
}

export default App;
