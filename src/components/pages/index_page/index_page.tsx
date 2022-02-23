import React from 'react';
import NextHead from 'next/head';
import { QiitaList } from './parts';
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
        すみません、syonet工事中です。
        <br />
        工事現場:{' '}
        <a href="https://github.com/igara/syonet_eight" target="_blank" rel="noreferrer">
          https://github.com/igara/syonet_eight
        </a>
        <QiitaList />
      </Layout>
    </>
  );
};
