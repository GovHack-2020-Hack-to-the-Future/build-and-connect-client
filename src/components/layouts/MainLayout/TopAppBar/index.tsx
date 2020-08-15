import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import Link from 'next/link';
import React, { FunctionComponent, ReactElement } from 'react';

type Props = {
  backAs?: string;
  backHref?: string;
};

const TopAppBar: FunctionComponent<Props> = ({
  backAs,
  backHref,
}: Props): ReactElement<Props> => {
  const scrollTrigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!scrollTrigger}>
      <AppBar id="top-app-bar" position="fixed">
        <Toolbar>
          {backHref && (
            <Link as={backAs} href={backHref}>
              <IconButton edge="start" color="inherit" aria-label="back">
                <ArrowBackIcon />
              </IconButton>
            </Link>
          )}
          <div id="placeholder" style={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default TopAppBar;
