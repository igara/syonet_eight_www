import React from 'react';
import Link from 'next/link';
import { useSWRSetHatenaList, useSWRHatenaListFetch } from '@www/src/hooks';
import { APICallResultDialog } from 'syonet_eight_design_system';

interface Props {}

export const HatenaList: React.FC<Props> = () => {
  const swrHatenaListFetch = useSWRHatenaListFetch();
  const hatenaList = useSWRSetHatenaList(swrHatenaListFetch.data);

  return (
    <fieldset>
      <legend>
        Hatena記事 (
        <a
          href="https://igara1119.hatenablog.com"
          target="_blank"
          rel="noopener noreferrer">
          公式
        </a>
        )
      </legend>
      {hatenaList.data &&
        hatenaList.data.slice().map((hatena) => {
          return (
            <div key={hatena.sha}>
              <Link href={`/blogs/hatena/${hatena.name}`}>{hatena.name}</Link>
            </div>
          );
        })}

      {swrHatenaListFetch.error && (
        <APICallResultDialog error="GitHubからHatenaの投稿を取得するのに失敗しました" />
      )}
    </fieldset>
  );
};
