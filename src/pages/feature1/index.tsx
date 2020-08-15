import { useQuery } from '@apollo/client';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from 'next';
import { NextSeoProps } from 'next-seo';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';

import MainLayout from '../../components/layouts/MainLayout';
import { environment } from '../../environment';
import messageByIdQuery from '../../graphql/document-nodes/features/queries/message-by-id.query.graphql';
import { initializeApolloClient } from '../../lib/apollo-client.helper';

type Props = {
  initialApolloState: any;
};

const variables = { id: 'TEST_MESSAGE_ID' };

const Feature1Page: NextPage = (): ReactElement => {
  const { data } = useQuery(messageByIdQuery, {
    variables,
    fetchPolicy: 'cache-first',
  });
  const { asPath } = useRouter();
  const baseUrl = environment.baseUrl;
  const url = `${baseUrl}${asPath}`;
  const description = 'Feature 1 page description. ';
  const title = 'Feature 1';
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
    <MainLayout content={{ style: { marginTop: '5em' } }} seoProps={seoProps}>
      <h1>{`${title} Page`}</h1>
      {data && <pre>{JSON.stringify(data)}</pre>}
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<Props>> => {
  const apolloClient = initializeApolloClient();

  await apolloClient.query({
    variables,
    query: messageByIdQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default Feature1Page;
