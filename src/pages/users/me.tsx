import Button from '@material-ui/core/Button';
import { NextPage } from 'next';
import { NextSeoProps } from 'next-seo';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';

import MainLayout from '../../components/layouts/MainLayout';
import { environment } from '../../environment';

const MyProfilePage: NextPage = (): ReactElement => {
  const { asPath } = useRouter();
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
    <MainLayout content={{ style: { marginTop: '5em' } }} seoProps={seoProps}>
      <h1>{`${title} Page`}</h1>
      <Button color="primary" href="/api/auth/logout" variant="contained">
        Logout
      </Button>
    </MainLayout>
  );
};

export default MyProfilePage;
