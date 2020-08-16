import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { NextPage } from 'next';
import { NextSeoProps } from 'next-seo';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';

import MainLayout from '../../components/layouts/MainLayout';
import QualificationsAccordion from '../../components/users/QualificationsAccordion';
import RecentWorksAccordion from '../../components/users/RecentWorksAccordion';
import RecommendationsAccordion from '../../components/users/RecommendationsAccordion';
import { environment } from '../../environment';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  avatarImg: {
    width: '100%',
  },
});

const MyProfilePage: NextPage = (): ReactElement => {
  const { asPath } = useRouter();
  const classes = useStyles();
  const baseUrl = environment.baseUrl;
  const url = `${baseUrl}${asPath}`;
  const description = 'My Profile';
  const title = 'My Profile';
  const seoProps: NextSeoProps = {
    description,
    title,
    nofollow: true,
    noindex: true,
    openGraph: {
      description,
      title,
      url,
    },
  };

  return (
    <MainLayout
      content={{ style: { marginTop: '6em' } }}
      seoProps={seoProps}
      topAppBar={{ backAs: '/jobs', backHref: '/jobs' }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid item xs={4}>
                <img
                  className={classes.avatarImg}
                  src="/images/default-avatar.png"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" component="h1" variant="h5">
              Derek Fong
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <QualificationsAccordion />
          </Grid>
          <Grid item xs={12}>
            <RecentWorksAccordion />
          </Grid>
          <Grid item xs={12}>
            <RecommendationsAccordion />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="primary"
              fullWidth
              href="/api/auth/logout"
              variant="contained"
            >
              Logout
            </Button>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default MyProfilePage;
