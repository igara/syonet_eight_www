import React from 'react';
import NextHead from 'next/head';
// import { Layout } from '@www/components/ui/layout';

type Props = {};

export const Page: React.FC<Props> = () => {
  return (
    <>
      <NextHead>
        <title>syonet</title>
        <meta name="description" content="syo.igarashiの実験場" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
      すみません、syonet工事中です。
      <br />
      工事現場: https://github.com/igara/syonet_eight
      {/* <Layout>aaa</Layout> */}
    </>
  );
};
