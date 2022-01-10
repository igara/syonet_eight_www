import { useSWRByURL } from 'syonet_eight_design_system';

export const getHatenaDetailURL = (hatenaPostTitle: string) => {
  return encodeURI(
    `https://raw.githubusercontent.com/igara/hatenablog-export/master/data/igara1119/${hatenaPostTitle}/README.html`,
  );
};

export const useSWRHatenaDetailFetch = (hatenaPostTitle: string) => {
  const swrQiita = useSWRByURL<string, any>({
    url: getHatenaDetailURL(hatenaPostTitle),
    type: 'text',
  });

  return swrQiita;
};
