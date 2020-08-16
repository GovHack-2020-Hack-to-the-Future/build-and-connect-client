import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import WorkIcon from '@material-ui/icons/Work';
import { useRouter } from 'next/router';
import React, { FunctionComponent, ReactElement, useContext } from 'react';
import Link from 'next/link';

import { CurrentUserContext } from '../../../lib/auth/current-user.context';

const BottomAppBar: FunctionComponent = (): ReactElement => {
  const currentUser = useContext(CurrentUserContext);
  const router = useRouter();
  const activeFeature = ((): string | undefined => {
    if (router.pathname === '/') {
      return 'home';
    } else if (/^\/users\/me/.test(router.pathname)) {
      return 'me';
    } else if (/^\/jobs/.test(router.pathname)) {
      return 'jobs';
    } else if (/^\/skills/.test(router.pathname)) {
      return 'skills';
    }
  })();

  console.log('Current user');
  console.log(currentUser);

  return (
    <AppBar
      id="bottom-app-bar"
      position="fixed"
      style={{ top: 'auto', bottom: 0 }}
    >
      <BottomNavigation id="bottom-nav" showLabels value={activeFeature}>
        <BottomNavigationAction
          label="Home"
          icon={
            <Link href="/" passHref>
              <HomeIcon />
            </Link>
          }
          value="home"
        />
        <BottomNavigationAction
          label="Jobs"
          icon={
            <Link href="/jobs">
              <WorkIcon />
            </Link>
          }
          value="jobs"
        />
        <BottomNavigationAction
          label="Skills"
          icon={
            <Link href="/skills">
              <AccountTreeIcon />
            </Link>
          }
          value="skills"
        />
        <BottomNavigationAction
          label={currentUser ? 'me' : 'login'}
          icon={
            <Link href={currentUser ? '/users/me' : '/api/auth/login'}>
              {currentUser ? <PersonIcon /> : <VpnKeyIcon />}
            </Link>
          }
          value="me"
        />
      </BottomNavigation>
    </AppBar>
  );
};

export default BottomAppBar;
