import { NextApiRequest, NextApiResponse } from 'next';

import { createAuth0 } from '../../../lib/auth/auth0.helper';

export default async function accessTokenAsync(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const auth0 = createAuth0();
    const tokenCache = await auth0.tokenCache(req, res);
    const { accessToken } = await tokenCache.getAccessToken();

    if (accessToken) {
      res.send({ accessToken });
    } else {
      res.status(500).end({ accessToken });
    }
  } catch (error) {
    if (error.name === 'AccessTokenError' && error.code === 'invalid_session') {
      res.send({ accessToken: null });
    } else {
      console.error(error);
      res.status(error.status || 500).end(error.message);
    }
  }
}
