import { createContext } from 'react';

import { CurrentUser } from './../../types/auth/current-user.type';

export const CurrentUserContext = createContext<CurrentUser | null>(null);
