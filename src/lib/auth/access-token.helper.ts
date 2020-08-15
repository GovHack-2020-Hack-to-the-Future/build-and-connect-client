import { environment } from '../../environment';

/**
 * Get access token from API route.
 * @returns A promise, which resolves with access token if defined; `null` otherwise.
 */
export async function getAccessTokenAsync(): Promise<string | null> {
  const accessTokenUri = '/api/auth/access-token';

  try {
    const res = await fetch(
      environment.isPlatformServer
        ? `${environment.baseUrl}${accessTokenUri}`
        : accessTokenUri
    );

    if (res.ok) {
      const { accessToken } = await res.json();

      return accessToken;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
