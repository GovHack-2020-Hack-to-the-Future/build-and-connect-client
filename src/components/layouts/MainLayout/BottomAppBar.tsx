import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import ListIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
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
    } else if (
      /^\/feature1/.test(router.pathname) ||
      /^\/feature1a/.test(router.pathname) ||
      /^\/feature1b/.test(router.pathname)
    ) {
      return 'feature1';
    } else if (/^\/feature2/.test(router.pathname)) {
      return 'feature2';
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
          label="Feature 1"
          icon={
            <Link href="/feature1">
              <MenuIcon />
            </Link>
          }
          value="menu"
        />
        <BottomNavigationAction
          label="Feature 2"
          icon={
            <Link href="/feature2">
              <ListIcon />
            </Link>
          }
          value="feature2"
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
