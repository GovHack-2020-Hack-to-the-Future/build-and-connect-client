import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { NextPage } from 'next';
import { NextSeoProps } from 'next-seo';
import Router, { useRouter } from 'next/router';
import React, { ReactElement } from 'react';

import KeywordSearch from '../../components/common/KeywordSearch';
import JobListItem from '../../components/jobs/JobListItem';
import MainLayout from '../../components/layouts/MainLayout';
import { environment } from '../../environment';

const JobsSearchPage: NextPage = (): ReactElement => {
  const { query, asPath } = useRouter();
  const { keyword } = query;
  const baseUrl = environment.baseUrl;
  const url = `${baseUrl}${asPath}`;
  const description = `Search jobs related to "${keyword}"`;
  const title = `Search Jobs - ${keyword}`;
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
    Router.push(`/jobs/${keyword}`);
  };

  const jobs = [];

  for (let i = 0; i < 10; i++) {
    jobs.push({
      id: `${i}`,
      imageSource: `/images/jobs/${keyword}.jpg`,
      isNewArrival: Math.floor(Math.random() * 100) % 2 === 0,
      name: keyword,
      numOfHours: Math.floor(Math.random() * 100),
    });
  }

  return (
    <MainLayout
      content={{ style: { marginTop: '5em' } }}
      seoProps={seoProps}
      topAppBar={{ backAs: '/jobs', backHref: '/jobs' }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <KeywordSearch onClick={handleKeywordSearch} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" component="h1">
              {`Showing results for "${keyword}"`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {jobs.map((job: any): any => (
                <Grid item xs={12} sm={6} md={4} key={job.id}>
                  <JobListItem
                    imageSource={job.imageSource}
                    isNewArrival={job.isNewArrival}
                    name={job.name}
                    onClick={() => {}}
                    numOfHours={job.numOfHours}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" fullWidth variant="text">
              Show More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default JobsSearchPage;
