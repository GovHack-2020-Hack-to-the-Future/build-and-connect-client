import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { DefaultSeo } from 'next-seo';
import NProgress from 'nprogress';
import React, { Fragment, ReactElement, useEffect } from 'react';

import CurrentUserProvider from '../components/auth/CurrentUserProvider';
import { environment } from '../environment';
import { useApollo } from '../lib/apollo-client.helper';
import { getDefaultSeoProps } from '../lib/common/get-default-seo-props.helper';
import { theme } from '../lib/common//theme';

Router.events.on('routeChangeStart', (): void => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', (): void => {
  NProgress.done();
});
Router.events.on('routeChangeError', (): void => {
  NProgress.done();
});

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const { app, baseUrl, seo } = environment;
  const defaultSeoProps = getDefaultSeoProps(
    app.name,
    `${app.name} website`,
    baseUrl,
    'en_AU',
    seo.default.image.uri,
    seo.default.image.height,
    seo.default.image.width,
    seo.follow,
    seo.index
  );

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          key="viewport"
        />
      </Head>
      <DefaultSeo {...defaultSeoProps} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ApolloProvider client={apolloClient}>
          <CurrentUserProvider>
            <Component {...pageProps} />
          </CurrentUserProvider>
        </ApolloProvider>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
