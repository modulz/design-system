import React from 'react';
import Head from 'next/head';
import '../styles.css';
import { darkThemeClass } from '../stitches.config';
import { Button } from '../components/Button';

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

      <Button
        variant="ghost"
        style={{ position: 'fixed', zIndex: 999, left: 260, top: 45 }}
        onClick={() => setTheme(theme ? undefined : darkThemeClass)}
      >
        Toggle theme
      </Button>
    </div>
  );
}

export default App;
