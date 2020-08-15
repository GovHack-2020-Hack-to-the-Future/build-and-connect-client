import React, {
  FunctionComponent,
  ReactElement,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import { environment } from '../../environment';
import { CurrentUserContext } from '../../lib/auth/current-user.context';
import { convertAuth0CurrentUser } from '../../lib/auth/current-user.helper';
import { CurrentUser } from '../../types/auth/current-user.type';

type Props = Record<string, unknown>;

const CurrentUserProvider: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
}: PropsWithChildren<Props>): ReactElement<PropsWithChildren<Props>> => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  useEffect(() => {
    const currentUserUri = '/api/auth/session';

    fetch(
      environment.isPlatformServer
        ? `${environment.baseUrl}${currentUserUri}`
        : currentUserUri
    )
      .then((res) => {
        const contentType = res.headers.get('content-type');

        return contentType && contentType.indexOf('application/json') !== -1
          ? res.json()
          : null;
      })
      .then((session) => session?.user || null)
      .then((currentUser) =>
        setCurrentUser(convertAuth0CurrentUser(currentUser))
      )
      .catch((err) => console.error(err));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
