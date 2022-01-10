import React from 'react';
import NextHead from 'next/head';
import { HatenaList } from './parts';

interface Props {}

export const IndexPage: React.FC<Props> = () => {
  return (
    <>
      <NextHead>
        <title>Hatena記事バックアップ / syonet</title>
        <meta name="description" content="Hatena記事バックアップ" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>

      <HatenaList />
    </>
  );
};
