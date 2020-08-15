import { NextApiRequest, NextApiResponse } from 'next';

import { createAuth0 } from '../../../lib/auth/auth0.helper';

export default async function sessionAsync(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const auth0 = createAuth0();
    const session = await auth0.getSession(req);

    if (session) {
      res.send(session);
    } else {
      res.end();
    }
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
