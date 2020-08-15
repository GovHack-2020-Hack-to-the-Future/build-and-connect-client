import { NextApiRequest, NextApiResponse } from 'next';

import { createAuth0 } from '../../../lib/auth/auth0.helper';

export default async function loginAsync(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const auth0 = createAuth0();
    await auth0.handleLogin(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
