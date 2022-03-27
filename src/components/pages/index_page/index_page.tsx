import React from 'react';
import NextHead from 'next/head';
import { Layout } from '@www/src/components';

type Props = {};

export const IndexPage: React.FC<Props> = () => {
  return (
    <>
      <NextHead>
        <title>syonet</title>
        <meta name="description" content="syo.igarashiの実験場" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>

      <Layout>
        syo.igarashiの個人的アクティビティーを主張するだけのサイトです
        <br />
        ここにサイトマップを入れる予定
      </Layout>
    </>
  );
};
