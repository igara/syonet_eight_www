import React from 'react';
import NextHead from 'next/head';
import { ZennArticleList } from './parts';
import { Layout } from '@www/src/components';

interface Props {}

export const IndexPage: React.FC<Props> = () => {
  return (
    <>
      <NextHead>
        <title>Zenn記事バックアップ / syonet</title>
        <meta name="description" content="Zenn記事バックアップ" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>

      <Layout>
        <ZennArticleList />
      </Layout>
    </>
  );
};
