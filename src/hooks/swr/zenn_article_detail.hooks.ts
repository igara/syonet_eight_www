import { useSWRByURL } from 'syonet_eight_design_system';
import * as Variables from 'syonet_eight_variables';

export const getZennArticleDetailURL = (zennArticlePostTitle: string) => {
  return encodeURI(Variables.backupZennArticleDetailURI(zennArticlePostTitle));
};

export const useSWRZennArticleDetailFetch = (zennArticlePostTitle: string) => {
  const swrZennArticle = useSWRByURL<string, any>({
    url: getZennArticleDetailURL(zennArticlePostTitle),
    type: 'text',
  });

  return swrZennArticle;
};
