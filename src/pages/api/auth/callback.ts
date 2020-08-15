import { print } from 'graphql/language/printer';
import { NextApiRequest, NextApiResponse } from 'next';

import { environment } from '../../../environment';
import signInMutation from '../../../graphql/document-nodes/auth/mutations/sign-in.mutation.graphql';
import { createAuth0 } from '../../../lib/auth/auth0.helper';

export default async function callbackAsync(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const auth0 = createAuth0();
    await auth0.handleCallback(req, res, {
      onUserLoaded: async (
        req: NextApiRequest,
        res: NextApiResponse,
        session: any
      ) => {
        if (session?.accessToken) {
          await fetch(environment.apollo.uri, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: print(signInMutation) }),
          });
        }

        return session;
      },
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
