type Environment = {
  apollo: {
    uri: string;
  };
  app: {
    name: string;
    slogan: string;
  };
  auth0: {
    audience: string;
    clientId: string;
    clientSecret: string;
    domain: string;
    postLogoutRedirectUri: string;
    redirectUri: string;
    scope: string;
    session: {
      cookieLifetime: number;
      cookieSecret: string;
    };
  };
  baseUrl: string;
  isPlatformBrowser: boolean;
  isPlatformServer: boolean;
  seo: {
    default: {
      image: {
        uri: string;
        height: number;
        width: number;
      };
    };
    follow: boolean;
    index: boolean;
  };
};

export const environment: Environment = {
  apollo: {
    uri: process.env.NEXT_PUBLIC_APOLLO_URI as string,
  },
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME as string,
    slogan: process.env.NEXT_PUBLIC_APP_SLOGAN as string,
  },
  auth0: {
    audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE as string,
    clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string,
    clientSecret: process.env.NEXT_AUTH0_CLIENT_SECRET as string,
    domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string,
    postLogoutRedirectUri: process.env
      .NEXT_PUBLIC_AUTH0_POST_LOGOUT_REDIRECT_URI as string,
    redirectUri: process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI as string,
    scope: process.env.NEXT_PUBLIC_AUTH0_SCOPE as string,
    session: {
      cookieLifetime: parseInt(
        process.env.NEXT_PUBLIC_AUTH0_SESSION_COOKIE_LIFETIME as string
      ),
      cookieSecret: process.env.NEXT_AUTH0_SESSION_COOKIE_SECRET as string,
    },
  },
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL as string,
  isPlatformBrowser: typeof window !== 'undefined',
  isPlatformServer: typeof window === 'undefined',
  seo: {
    default: {
      image: {
        uri: process.env.NEXT_PUBLIC_SEO_DEFAULT_IMAGE_URI as string,
        height: parseInt(
          process.env.NEXT_PUBLIC_SEO_DEFAULT_IMAGE_HEIGHT as string,
          10
        ),
        width: parseInt(
          process.env.NEXT_PUBLIC_SEO_DEFAULT_IMAGE_WIDTH as string,
          10
        ),
      },
    },
    follow: process.env.NEXT_PUBLIC_SEO_FOLLOW === 'true',
    index: process.env.NEXT_PUBLIC_SEO_INDEX === 'true',
  },
};
