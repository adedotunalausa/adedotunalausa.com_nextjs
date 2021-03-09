import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline'
import '../styles/appBar.css'

import { StateProvider } from '../context/StateProviders'
import reducer, { initialState } from '../context/reducer'

const description = "I build digital products that meets the expectations of users, help businesses reach their goals and result in an awesome user interaction";
const title = "Adedotun Alausa | Software Engineer";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description"
          content={description} />
        <meta
          name="viewport"
          content="width=device-width,maximum-scale=1,initial-scale=1"
        />
        <meta property="og:type" content="portfolio website" />
        <meta name="og:title" property="og:title" content={title} />
        <meta name="og:description" property="og:description" content={description} />
        <meta property="og:image" content="/adedotun_logo.svg" />
        <meta property="og:site_name" content="Adedotun Alausa | Software Engineer" />
        <meta property="og:url" content="https://adedotunalausa.com/" />
        <link rel="canonical" href="https://adedotunalausa.com/" />
        <meta name="twitter:card" content="Software Engineer" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="@adedotunalausa" />
        <meta name="twitter:creator" content="@adedotunalausa" />
        <meta name="twitter:image" content="/adedotun_logo.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-col</meta>or" content="#ffffff" />
      </Head>
      <StateProvider initialState={initialState} reducer={reducer}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </StateProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};