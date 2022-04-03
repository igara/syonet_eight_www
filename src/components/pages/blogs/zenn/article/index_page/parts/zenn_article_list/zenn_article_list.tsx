import React from 'react';
import Link from 'next/link';
import { useSWRSetZennArticleList, useSWRZennArticleListFetch } from '@www/src/hooks';
import { APICallResultDialog } from 'syonet_eight_design_system';

interface Props {}

export const ZennArticleList: React.FC<Props> = () => {
  const swrZennArticleListFetch = useSWRZennArticleListFetch();
  const zennArticleList = useSWRSetZennArticleList(swrZennArticleListFetch.data);

  return (
    <fieldset>
      <legend>
        Zenn記事 (
        <a href="https://zenn.dev/igara" target="_blank" rel="noopener noreferrer">
          公式
        </a>
        )
      </legend>
      {zennArticleList.data &&
        zennArticleList.data.slice().map((article) => {
          console.log(article);
          return (
            <div key={article.sha}>
              <Link href={`/blogs/zenn/article/${article.name}`}>
                <a>{article.name}</a>
              </Link>
            </div>
          );
        })}

      {swrZennArticleListFetch.error && (
        <APICallResultDialog error="GitHubからZennの投稿を取得するのに失敗しました" />
      )}
    </fieldset>
  );
};
