import React from 'react';
import NextHead from 'next/head';
import { QiitaList } from './parts';

interface Props {}

export const IndexPage: React.FC<Props> = () => {
  return (
    <>
      <NextHead>
        <title>Qiita記事バックアップ / syonet</title>
        <meta name="description" content="Qiita記事バックアップ" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>

      <QiitaList />
    </>
  );
};
