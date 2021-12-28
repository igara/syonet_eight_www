import { useSWRByURL } from 'syonet_eight_design_system';

export const getQiitaDetailURL = (qiitaPostTitle: string) => {
  return encodeURI(
    `https://raw.githubusercontent.com/igara/qiita-export/master/data/igara/${qiitaPostTitle}/README.html`,
  );
};

export const useSWRQiitaDetailFetch = (qiitaPostTitle: string) => {
  const swrQiita = useSWRByURL<string, any>({
    url: getQiitaDetailURL(qiitaPostTitle),
    type: 'text',
  });

  return swrQiita;
};
