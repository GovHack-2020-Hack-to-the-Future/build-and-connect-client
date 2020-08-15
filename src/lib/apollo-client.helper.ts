import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { concatPagination } from '@apollo/client/utilities';
import { useMemo } from 'react';

import { getAccessTokenAsync } from './auth/access-token.helper';
import { environment } from '../environment';
import { ApolloClientCache } from '../types/apollo-client-cache.type';

let apolloClient: ApolloClient<ApolloClientCache> | undefined = undefined;

/**
 * Create apollo client.
 * @returns apollo client.
 */
function createApolloClient(): ApolloClient<ApolloClientCache> {
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allPosts: concatPagination(),
        },
      },
    },
  });
  const authLink = setContext(async (_, { headers }) => {
    const accessToken = await getAccessTokenAsync();

    return {
      headers: {
        ...headers,
        ...(accessToken && { authorization: `Bearer ${accessToken}` }),
      },
    };
  });
  const httpLink = createHttpLink({
    uri: environment.apollo.uri,
    credentials: 'same-origin',
  });

  return new ApolloClient({
    cache,
    link: authLink.concat(httpLink),
    ssrMode: environment.isPlatformServer,
  });
}

/**
 * Initialize Apollo client.
 * @param initialState - Initial state.
 * @returns Initialized Apollo client.
 */
export function initializeApolloClient(
  initialState: any = null
): ApolloClient<ApolloClientCache> {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If page has Next.js data fetching methods that use Apollo Client, the initial state gets hydrated here.
  if (initialState) {
    const existingCache = _apolloClient.extract();

    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // Next.js SSG and SSR always create a new Apollo Client.
  if (environment.isPlatformServer) {
    return _apolloClient;
  }

  // Create the Apollo Client once in the client.
  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
}

/**
 * Use Apollo hook.
 * @param initialState - Initial state.
 * @returns Apollo store.
 */
export function useApollo(initialState: any): ApolloClient<ApolloClientCache> {
  const store = useMemo(() => initializeApolloClient(initialState), [
    initialState,
  ]);
  return store;
}
