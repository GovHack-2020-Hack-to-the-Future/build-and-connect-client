import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { NextPage } from 'next';
import { NextSeoProps } from 'next-seo';
import React, { ReactElement } from 'react';

import MainLayout from '../components/layouts/MainLayout';
import HeroBanner from '../components/home/HeroBanner';
import { environment } from '../environment';

const HomePage: NextPage = (): ReactElement => {
  const slogan = environment.app.slogan;
  const title = 'Home';
  const seoProps: NextSeoProps = {
    title,
    titleTemplate: `%s - ${slogan}`,
  };

  return (
    <MainLayout content={{ style: { marginTop: '4em' } }} seoProps={seoProps}>
      <div style={{ height: '100vh' }}>
        <HeroBanner />
      </div>
      <Container>
        <Typography>Content here</Typography>
      </Container>
    </MainLayout>
  );
};

export default HomePage;
