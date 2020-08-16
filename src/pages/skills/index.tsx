import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { NextPage } from 'next';
import { NextSeoProps } from 'next-seo';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';

import MainLayout from '../../components/layouts/MainLayout';
import { environment } from '../../environment';

const SkillsPage: NextPage = (): ReactElement => {
  const { asPath } = useRouter();
  const baseUrl = environment.baseUrl;
  const url = `${baseUrl}${asPath}`;
  const description = 'Unlock your skills';
  const title = 'Skills';
  const seoProps: NextSeoProps = {
    description,
    title,
    openGraph: {
      description,
      title,
      url,
    },
  };

  return (
    <MainLayout content={{ style: { marginTop: '8em' } }} seoProps={seoProps}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography align="center" component="h1" variant="h5">
              Unlock Your Skills
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img
              src="/images/under-construction.png"
              style={{ width: '100%', padding: '2em' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" fullWidth href="/" variant="outlined">
              Back to Home
            </Button>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default SkillsPage;
