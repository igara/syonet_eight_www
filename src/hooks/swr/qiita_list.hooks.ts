import useSWR from 'swr';
import { useSWRByURL } from 'syonet_eight_design_system';
import * as Variables from 'syonet_eight_variables';

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
  const swrQiita = useSWRByURL<QiitaList, any>({
    url: Variables.backupQiitaListURI,
  });

  return swrQiita;
};

export const useSWRSetQiitaList = (qiitaList?: QiitaList) => {
  const swrQiitaListt = useSWR('USE_SWR_QIITA_LIST', null, {
    fallbackData: qiitaList ? qiitaList.slice().reverse() : [],
  });

  return swrQiitaListt;
};
