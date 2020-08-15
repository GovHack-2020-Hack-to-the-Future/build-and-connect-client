import React, {
  Fragment,
  FunctionComponent,
  ReactElement,
  PropsWithChildren,
  useContext,
} from 'react';
import Error from 'next/error';

import { CurrentUserContext } from '../../lib/auth/current-user.context';
import { hasPermission } from '../../lib/auth/current-user.helper';

//TODO: Provide customized 401 and 403 titles.
type Props = {
  permissions?: string[];
};

const AuthGuard: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  permissions,
}: PropsWithChildren<Props>): ReactElement<PropsWithChildren<Props>> => {
  const currentUser = useContext(CurrentUserContext);
  let contentElement;

  if (currentUser === undefined) {
    // TODO: Use Load spinner.
    contentElement = <p>Loading...</p>;
  } else if (!currentUser) {
    contentElement = <Error statusCode={401} title="Please login" />;
  } else {
    if (permissions && permissions.length > 0) {
      if (hasPermission(currentUser, permissions)) {
        contentElement = children;
      } else {
        contentElement = <Error statusCode={403} title="Access denied" />;
      }
    } else {
      contentElement = children;
    }
  }

  return (
    <Fragment>
      <h2>Auth Guard</h2>
      <div>
        <strong>Current User: </strong>
        <pre>{JSON.stringify(currentUser)}</pre>
      </div>
      {contentElement}
    </Fragment>
  );
};

export default AuthGuard;
