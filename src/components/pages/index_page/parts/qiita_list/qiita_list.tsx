import React from 'react';
import Link from 'next/link';
import { useSWRQiitaList, useSWRQiitaListFetch } from '@www/src/hooks';
import { APICallResultDialog } from 'syonet_eight_design_system';

interface Props {}

export const QiitaList: React.FC<Props> = () => {
  const swrQiitaListFetch = useSWRQiitaListFetch();
  const qiitaList = useSWRQiitaList(swrQiitaListFetch.data);

  return (
    <fieldset>
      <legend>
        Qiita記事 (
        <a href="https://qiita.com/igara" target="_blank" rel="noopener noreferrer">
          公式
        </a>{' '}
        / <Link href="/blogs/qiita">バックアップ</Link>)
      </legend>
      {qiitaList.data &&
        qiitaList.data.slice(0, 5).map((qiita) => {
          return (
            <div key={qiita.sha}>
              <Link href={`/blogs/qiita/${qiita.name}`}>{qiita.name}</Link>
            </div>
          );
        })}

      {swrQiitaListFetch.error && (
        <APICallResultDialog error="GitHubからQiitaの投稿を取得するのに失敗しました" />
      )}
    </fieldset>
  );
};
