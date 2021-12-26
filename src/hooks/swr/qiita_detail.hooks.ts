import { useSWRByURL } from 'syonet_eight_design_system';

export const useSWRQiitaDetailFetch = (qiitaPostTitle: string) => {
  const swrQiita = useSWRByURL<string, any>(
    `https://raw.githubusercontent.com/igara/qiita-export/master/data/igara/${qiitaPostTitle}/README.html`,
    'text',
  );

  return swrQiita;
};
