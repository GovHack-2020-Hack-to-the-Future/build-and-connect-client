import { initAuth0 } from '@auth0/nextjs-auth0';

import { environment } from '../../environment';

/**
 * Create Auth0 instance.
 * @param language - Language.
 * @returns Auth0 instance.
 */
export function createAuth0(): any {
  const redirectUri = `${environment.baseUrl}${environment.auth0.redirectUri}`;

  return initAuth0({
    redirectUri,
    audience: environment.auth0.audience,
    clientId: environment.auth0.clientId,
    clientSecret: environment.auth0.clientSecret,
    domain: environment.auth0.domain,
    postLogoutRedirectUri: environment.auth0.postLogoutRedirectUri,
    scope: environment.auth0.scope,
    session: {
      cookieLifetime: environment.auth0.session.cookieLifetime,
      cookieSecret: environment.auth0.session.cookieSecret,
      storeAccessToken: true,
      storeRefreshToken: true,
    },
  });
}
