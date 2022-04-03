import useSWR from 'swr';
import { useSWRByURL } from 'syonet_eight_design_system';
import * as Variables from 'syonet_eight_variables';

export type ZennArticleList = Variables.BackupZennArticleList;

export const useSWRZennArticleListFetch = () => {
  const swrQiita = useSWRByURL<ZennArticleList, any>({
    url: Variables.backupZennArticleListURI,
  });

  return swrQiita;
};

export const useSWRSetZennArticleList = (zennArticleList?: ZennArticleList) => {
  const swrZennArticleList = useSWR('USE_SWR_ZENN_ARTICLE_LIST', null, {
    fallbackData: zennArticleList ? zennArticleList.slice().reverse() : [],
  });

  return swrZennArticleList;
};
