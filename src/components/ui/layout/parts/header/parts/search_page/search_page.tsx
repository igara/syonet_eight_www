import React from 'react';
import * as Styles from './search_page.styles';
import * as Hooks from './search_page.hooks';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, connectSearchBox, Hits } from 'react-instantsearch-dom';
import Link from 'next/link';
import { Text, StandardDialog } from 'syonet_eight_design_system';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID ?? '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY ?? '',
);

interface Props {}

export const SearchPage: React.FC<Props> = (props) => {
  const [displaySearchPageDialog, setDisplaySearchPageDialog] =
    Hooks.useDisplaySearchPageDialogState(false);
  const [searchPageText, setSearchPageText] = Hooks.useSearchPageTextState('');

  const SearchBox = connectSearchBox(() => {
    return <></>;
  });

  return (
    <>
      <Text
        placeholder="ページ検索"
        type="search"
        readOnly={true}
        onClick={Hooks.useOnClickSearchPageTextCallback(setDisplaySearchPageDialog)}
      />

      {displaySearchPageDialog && (
        <StandardDialog
          isOpen={displaySearchPageDialog}
          onClose={() => setDisplaySearchPageDialog(false)}>
          <Text
            placeholder="ページ検索"
            onChange={(e) => setSearchPageText(e.target.value)}
            defaultValue={searchPageText}
          />
          {searchPageText && (
            <InstantSearch
              searchClient={searchClient}
              indexName={process.env.NEXT_PUBLIC_ALGOLIA_WWW_PAGE_INDEX ?? ''}>
              <SearchBox defaultRefinement={searchPageText} />

              <Hits
                hitComponent={({ hit }) => {
                  return <Link href={hit.nextLink}>{hit.title}</Link>;
                }}
              />
            </InstantSearch>
          )}
        </StandardDialog>
      )}
    </>
  );
};
