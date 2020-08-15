import { ServerStyleSheets } from '@material-ui/core/styles';
import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';

import { environment } from '../environment';
import { theme } from '../lib/common/theme';

type Props = {
  language: string;
};

class Document extends NextDocument<Props> {
  render(): JSX.Element {
    const appName = environment.app.name;

    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" key="charSet" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="httpEquiv" />
          <meta
            name="application-name"
            content={appName}
            key="applicationName"
          />
          <meta
            name="apple-mobile-web-app-capable"
            content="yes"
            key="appleMobileWebAppCapable"
          />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
            key="appleMobileWebAppStatusBarStyle"
          />
          <meta
            name="apple-mobile-web-app-title"
            content={appName}
            key="appleMobileWebAppTitle"
          />
          <meta
            name="format-detection"
            content="telephone=no"
            key="formatDetection"
          />
          <meta
            name="mobile-web-app-capable"
            content="yes"
            key="mobileWebAppCapable"
          />
          <meta
            name="theme-color"
            content={theme.palette.primary.main}
            key="themeColor"
          />
          <link rel="manifest" href="/manifest.json" key="manifest" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/favicon.ico"
            key="favicon"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/icons/icon-16x16.png"
            key="icon16x16"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/icons/icon-32x32.png"
            key="icon32x32"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/images/icons/icon-96x96.png"
            key="icon96x96"
          />
          <link
            rel="apple-touch-icon"
            href="/images/icons/apple-icon.png"
            key="appleTouchIcon"
          />
          <link
            rel="apple-touch-icon"
            href="/images/icons/apple-icon-57x57.png"
            sizes="57x57"
            key="appleTouchIcon57x57"
          />
          <link
            rel="apple-touch-icon"
            href="/images/icons/apple-icon-60x60.png"
            sizes="60x60"
            key="appleTouchIcon60x60"
          />
          <link
            rel="apple-touch-icon"
            href="/images/icons/apple-icon-72x72.png"
            sizes="72x72"
            key="appleTouchIcon72x72"
          />
          <link
            rel="apple-touch-icon"
            href="/images/icons/apple-icon-76x76.png"
            sizes="76x76"
            key="appleTouchIcon76x76"
          />
          <link
            rel="apple-touch-icon"
            href="/images/icons/apple-icon-114x114.png"
            sizes="114x114"
            key="appleTouchIcon114x114"
          />
          <link
            rel="apple-touch-icon"
            href="/images/icons/apple-icon-120x120.png"
            sizes="120x120"
            key="appleTouchIcon120x120"
          />
          <link
            rel="apple-touch-icon"
            href="/images/icons/apple-icon-144x144.png"
            sizes="144x144"
            key="appleTouchIcon144x144"
          />
          <link
            rel="apple-touch-icon"
            href="/images/icons/apple-icon-152x152.png"
            sizes="152x152"
            key="appleTouchIcon152x152"
          />
          <link
            rel="apple-touch-icon"
            href="/images/icons/apple-icon-180x180.png"
            sizes="180x180"
            key="appleTouchIcon180x180"
          />
          <link
            rel="apple-touch-icon-precomposed"
            href="/images/icons/apple-icon-precomposed.png"
            key="appleTouchIconPrecomposed"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/css/nprogress.css"
            key="styleNProgress"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            key="fontRoboto"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

Document.getInitialProps = async (documentContext: DocumentContext) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = documentContext.renderPage;

  documentContext.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await NextDocument.getInitialProps(documentContext);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default Document;
