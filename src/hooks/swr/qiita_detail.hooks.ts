import { useSWRByURL } from 'syonet_eight_design_system';
import * as Variables from 'syonet_eight_variables';

export const getQiitaDetailURL = (qiitaPostTitle: string) => {
  return encodeURI(Variables.backupQiitaDetailURI(qiitaPostTitle));
};

export const useSWRQiitaDetailFetch = (qiitaPostTitle: string) => {
  const swrQiita = useSWRByURL<string, any>({
    url: getQiitaDetailURL(qiitaPostTitle),
    type: 'text',
  });

  return swrQiita;
};
