import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { NextPage } from 'next';
import { NextSeoProps } from 'next-seo';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';

import KeywordSearch from '../../components/common/KeywordSearch';
import MainLayout from '../../components/layouts/MainLayout';
import { environment } from '../../environment';

import RecommendedJobsCarousel from '../../components/jobs/RecommendedJobsCarousel';

type Props = {
  initialApolloState: any;
};

const JobsPage: NextPage = (): ReactElement => {
  const { asPath } = useRouter();
  const baseUrl = environment.baseUrl;
  const url = `${baseUrl}${asPath}`;
  const description = 'Find your perfect opportunity';
  const title = 'Browse Jobs';
  const seoProps: NextSeoProps = {
    description,
    title,
    openGraph: {
      description,
      title,
      url,
    },
  };

  /**
   * Handle keyword search.
   * @param keyword - Keyword.
   */
  const handleKeywordSearch = (keyword: string): void => {
    console.log(keyword);
  };

  return (
    <MainLayout content={{ style: { marginTop: '8em' } }} seoProps={seoProps}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography align="center" variant="h5" component="h1">
              Find your perfect opportunity
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <KeywordSearch onClick={handleKeywordSearch} />
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1" gutterBottom>
              Or browse based on your profile interests
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <RecommendedJobsCarousel />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" fullWidth variant="text">
              Show All
            </Button>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default JobsPage;
