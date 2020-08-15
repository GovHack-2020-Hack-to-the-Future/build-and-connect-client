import { makeStyles } from '@material-ui/core/styles';
import { NextSeo, NextSeoProps } from 'next-seo';
import React, {
  Fragment,
  FunctionComponent,
  ReactElement,
  PropsWithChildren,
} from 'react';

import BottomAppBar from './BottomAppBar';
import TopAppBar from './TopAppBar';

type Props = {
  content?: {
    style?: {
      marginBottom?: string;
      marginTop?: string;
    };
  };
  seoProps?: NextSeoProps;
  topAppBar?: {
    backAs?: string;
    backHref?: string;
  };
};

const MainLayout: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  content,
  seoProps,
  topAppBar,
}: PropsWithChildren<Props>): ReactElement<PropsWithChildren<Props>> => {
  const useStyles = makeStyles({
    mainContainer: {
      marginBottom: content?.style?.marginBottom || '5em',
      marginTop: content?.style?.marginTop || '5em',
    },
  });
  const classes = useStyles();

  return (
    <Fragment>
      {seoProps && <NextSeo {...seoProps} />}
      <TopAppBar {...topAppBar} />
      <main className={classes.mainContainer}>{children}</main>
      <BottomAppBar />
    </Fragment>
  );
};

export default MainLayout;
