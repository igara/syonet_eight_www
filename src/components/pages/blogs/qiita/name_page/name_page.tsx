import React from 'react';
import NextHead from 'next/head';
import { useSWRQiitaDetailFetch } from '@www/src/hooks';
import { APICallResultDialog } from 'syonet_eight_design_system';
import { useRouter } from 'next/router';

export type Props = {
  ssr: {
    qiitaDetailData: string;
    ogp: {
      title: string;
      description: string;
      path: string;
    };
  };
};

export const NamePage: React.FC<Props> = (props) => {
  const router = useRouter();
  const { name } = router.query;
  const title = name?.toString();
  const swrQiitaListFetch = useSWRQiitaDetailFetch(title || '');
  const html = props.ssr.qiitaDetailData
    ? props.ssr.qiitaDetailData
    : swrQiitaListFetch.data;

  return (
    <>
      <NextHead>
        <title>{props.ssr.ogp.title} / Qiita バックアップ / syonet</title>
        <meta name="description" content={props.ssr.ogp.description} />
        <meta
          property="og:title"
          content={`${props.ssr.ogp.title} / Qiita バックアップ / syonet`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_HTTP_OGP_HOST}/www?path=${props.ssr.ogp.path}&width=1200&height=630`}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_HTTP_OGP_HOST}/www?path=${props.ssr.ogp.path}&width=630&height=630`}
        />
        <meta property="og:description" content={props.ssr.ogp.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>

      {html && <div dangerouslySetInnerHTML={{ __html: html }} />}

      {swrQiitaListFetch.error && (
        <APICallResultDialog error="GitHubからQiitaの投稿を取得するのに失敗しました" />
      )}
    </>
  );
};
