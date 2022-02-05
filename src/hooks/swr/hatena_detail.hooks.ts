import { useSWRByURL } from 'syonet_eight_design_system';
import * as Variables from 'syonet_eight_variables';

export const getHatenaDetailURL = (hatenaPostTitle: string) => {
  return encodeURI(Variables.backupHatenaDetailURI(hatenaPostTitle));
};

export const useSWRHatenaDetailFetch = (hatenaPostTitle: string) => {
  const swrQiita = useSWRByURL<string, any>({
    url: getHatenaDetailURL(hatenaPostTitle),
    type: 'text',
  });

  return swrQiita;
};
