import React from 'react';
import NextHead from 'next/head';
import { useSWRZennArticleDetailFetch } from '@www/src/hooks';
import { APICallResultDialog } from 'syonet_eight_design_system';
import { useRouter } from 'next/router';
import { Layout } from '@www/src/components';

export type Props = {
  ssr: {
    zennArticleDetailData: string;
    ogp: {
      title: string;
      description: string;
      path: string;
    };
  };
};

export const MarkdownNamePage: React.FC<Props> = (props) => {
  const router = useRouter();
  const { markdown_name } = router.query;
  const markdownName = markdown_name?.toString();
  const swrZennArticleDetailFetch = useSWRZennArticleDetailFetch(markdownName || '');
  const html = props.ssr.zennArticleDetailData
    ? props.ssr.zennArticleDetailData
    : swrZennArticleDetailFetch.data;

  return (
    <>
      <NextHead>
        <title>{props.ssr.ogp.title} / Zenn バックアップ / syonet</title>
        <meta name="description" content={props.ssr.ogp.description} />
        <meta
          property="og:title"
          content={`${props.ssr.ogp.title} / Zenn バックアップ / syonet`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_HTTP_OGP_HOST}/api/www?path=${props.ssr.ogp.path}&width=1200&height=630`}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_HTTP_OGP_HOST}/api/www?path=${props.ssr.ogp.path}&width=630&height=630`}
        />
        <meta property="og:description" content={props.ssr.ogp.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>

      <Layout>
        {html && <div dangerouslySetInnerHTML={{ __html: html }} />}

        {swrZennArticleDetailFetch.error && (
          <APICallResultDialog error="GitHubからZennの投稿を取得するのに失敗しました" />
        )}
      </Layout>
    </>
  );
};
