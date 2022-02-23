import React from 'react';

export const useDisplaySearchPageDialogState = (flag: boolean) => {
  return React.useState(flag);
};

export const useOnClickSearchPageTextCallback = (
  setDisplaySearchPageDialog: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  return React.useCallback(() => {
    setDisplaySearchPageDialog(true);
  }, [setDisplaySearchPageDialog]);
};

export const useSearchPageTextState = (text: string) => {
  return React.useState(text);
};

export const useOnChangeSearchPageTextCallback = (
  setSearchPageText: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  return React.useCallback(() => {
    setSearchPageText(true);
  }, [setSearchPageText]);
};
