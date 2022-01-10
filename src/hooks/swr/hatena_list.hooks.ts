import useSWR from 'swr';
import { useSWRByURL } from 'syonet_eight_design_system';

export type HatenaList = {
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

export const useSWRHatenaListFetch = () => {
  const swrQiita = useSWRByURL<HatenaList, any>({
    url: 'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119',
  });

  return swrQiita;
};

export const useSWRSetHatenaList = (hatenaList?: HatenaList) => {
  const swrQiitaListt = useSWR('USE_SWR_HATENA_LIST', null, {
    fallbackData: hatenaList ? hatenaList.slice().reverse() : [],
  });

  return swrQiitaListt;
};
