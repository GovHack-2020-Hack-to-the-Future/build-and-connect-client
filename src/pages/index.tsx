import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { NextPage } from 'next';
import { NextSeoProps } from 'next-seo';
import React, { ReactElement } from 'react';

import HeroBanner from '../components/home/HeroBanner';
import MainLayout from '../components/layouts/MainLayout';
import { environment } from '../environment';

const HomePage: NextPage = (): ReactElement => {
  const slogan = environment.app.slogan;
  const title = environment.app.name;
  const seoProps: NextSeoProps = {
    title,
    titleTemplate: `%s - ${slogan}`,
  };

  return (
    <MainLayout content={{ style: { marginTop: '4em' } }} seoProps={seoProps}>
      <div style={{ height: '100vh' }}>
        <HeroBanner />
        <div style={{ marginTop: '2em' }}>
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography component="p" variant="body1">
                  <strong>{title}</strong> is a platform to recover from
                  COVID-19 employment disruption by linking job seekers with
                  businesses through short-term tasks to form new networks and
                  generate references. Businesses benefit from reduction in
                  hiring risk through references and economic work fulfilment.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="center" component="p" variant="button">
                  "Designed to be deleted"
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
