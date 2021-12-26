import useSWR from 'swr';
import { useSWRByURL } from 'syonet_eight_design_system';

export type QiitaList = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string | null;
  type: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
}[];

export const useSWRQiitaListFetch = () => {
  const swrQiita = useSWRByURL<QiitaList, any>(
    'https://api.github.com/repos/igara/qiita-export/contents/data/igara',
  );

  return swrQiita;
};

export const useSWRQiitaList = (qiitaList?: QiitaList) => {
  const swrQiitaListt = useSWR('USE_SWR_QIITA_LIST', null, {
    fallbackData: qiitaList ? qiitaList.slice().reverse() : [],
  });

  return swrQiitaListt;
};
