import React from 'react';
import NextHead from 'next/head';
import { Layout } from '@www/components/ui/layout';

type Props = {};

export const Page: React.FC<Props> = () => {
  return (
    <>
      <NextHead>
        <title>syonet</title>
        <meta name="description" content="syo.igarashiの実験場" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>

      <Layout>aaa</Layout>
    </>
  );
};
