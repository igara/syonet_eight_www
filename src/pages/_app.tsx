import React from 'react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
