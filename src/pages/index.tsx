import { NextPage } from 'next';
import { NextSeoProps } from 'next-seo';
import React, { ReactElement } from 'react';

import MainLayout from '../components/layouts/MainLayout';
import { environment } from '../environment';

const HomePage: NextPage = (): ReactElement => {
  const slogan = environment.app.slogan;
  const title = 'Home';
  const seoProps: NextSeoProps = {
    title,
    titleTemplate: `%s - ${slogan}`,
  };

  return (
    <MainLayout content={{ style: { marginTop: '5em' } }} seoProps={seoProps}>
      <h1>Home Page</h1>
    </MainLayout>
  );
};

export default HomePage;
