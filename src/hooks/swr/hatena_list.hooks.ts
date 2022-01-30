import useSWR from 'swr';
import { useSWRByURL } from 'syonet_eight_design_system';
import * as Variables from 'syonet_eight_variables';

export type HatenaList = Variables.BackupHatenaList;

export const useSWRHatenaListFetch = () => {
  const swrQiita = useSWRByURL<HatenaList, any>({
    url: Variables.backupHatenaListURI,
  });

  return swrQiita;
};

export const useSWRSetHatenaList = (hatenaList?: HatenaList) => {
  const swrQiitaListt = useSWR('USE_SWR_HATENA_LIST', null, {
    fallbackData: hatenaList ? hatenaList.slice().reverse() : [],
  });

  return swrQiitaListt;
};
