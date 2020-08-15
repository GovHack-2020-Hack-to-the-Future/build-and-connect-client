import { environment } from '../../environment';
import { CurrentUser } from '../../types/auth/current-user.type';

/**
 * Get current user from session.
 * @param session - Session.
 * @returns Current user if defined; `null` otherwise.
 */
export function convertAuth0CurrentUser(auth0User: any): CurrentUser | null {
  let currentUser: CurrentUser | null = null;

  if (auth0User?.sub) {
    const { email, email_verified, name, nickname, picture, sub } = auth0User;
    const appMetadata = auth0User[`${environment.baseUrl}/app_metadata`];
    const permissions = appMetadata ? appMetadata.permissions || [] : [];

    currentUser = {
      ...(email && { email }),
      ...(name && { name }),
      ...(nickname && { nickname }),
      ...(Object.prototype.hasOwnProperty.call(auth0User, 'email_verified') && {
        isEmailVerified: email_verified,
      }),
      ...(picture && { pictureUrl: picture }),
      permissions,
      id: sub,
    };
  }

  return currentUser;
}

/**
 * Determine if current user has permission specified.
 * @param permissions - List of permissions to check against; Current user is considered to be authorized if user contains at least one of the permissions listed.
 * @returns `true` if user has permission specified; `false`otherwise.
 */
export function hasPermission(
  currentUser: CurrentUser | null,
  permissions: string[]
): boolean {
  let hasPermission = false;

  if (currentUser) {
    if (
      permissions &&
      permissions.constructor === Array &&
      permissions.length > 0
    ) {
      if (
        currentUser.permissions &&
        currentUser.permissions.constructor === Array &&
        currentUser.permissions.length > 0
      ) {
        const currentUserPermissions = currentUser.permissions;

        hasPermission = permissions.some((permission: string): boolean =>
          currentUserPermissions.includes(permission)
        );
      }
    }
  }

  return hasPermission;
}
