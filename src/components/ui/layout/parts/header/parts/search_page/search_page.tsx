import React from 'react';
import * as Styles from './search_page.styles';
import * as Hooks from './search_page.hooks';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  connectSearchBox,
  Hits,
  connectHitsPerPage,
  connectRefinementList,
  connectPagination,
} from 'react-instantsearch-dom';
import Link from 'next/link';
import { Text, StandardDialog, Select, NumberArea } from 'syonet_eight_design_system';

interface Props {}

export const SearchPage: React.FC<Props> = (props) => {
  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID ?? '',
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY ?? '',
  );
  const indexName = process.env.NEXT_PUBLIC_ALGOLIA_WWW_PAGE_INDEX ?? '';

  const hitsPerPageItemsObject = [
    { value: '10', label: '10件表示' },
    { value: '20', label: '20件表示' },
  ];
  const hitsPerPageItems = hitsPerPageItemsObject.map((item) => {
    return {
      ...item,
      value: Number.parseInt(item.value),
    };
  });
  const defaultItem = hitsPerPageItemsObject[0];
  const [displaySearchPageDialog, setDisplaySearchPageDialog] =
    Hooks.useDisplaySearchPageDialogState(false);
  const [searchPageText, setSearchPageText] = Hooks.useSearchPageTextState('');
  const [hitsPerPageValue, setHitsPerPageValue] = Hooks.useHitsPerPageValueState(
    defaultItem.value,
  );
  const [hitsPerPageLabel, setHitsPerPageLabel] = Hooks.useHitsPerPageLabelState(
    defaultItem.label,
  );
  const [paginationValue, setPaginationValue] = Hooks.usePaginationValueState(1);

  const onChangeSelect = React.useCallback(
    (event: any) => {
      const label = hitsPerPageItemsObject.find(
        (item) => item.value == event.currentTarget.dataset.value,
      )?.label;

      if (label) {
        setHitsPerPageValue(Number.parseInt(event.currentTarget.dataset.value));
        setHitsPerPageLabel(label);
      }
    },
    [setHitsPerPageValue, setHitsPerPageLabel],
  );

  const onChangeInputCallback = React.useCallback(
    (value: number) => {
      setPaginationValue(value);
    },
    [setPaginationValue],
  );

  const onChangeInput = (value: number) => {
    onChangeInputCallback(value);
  };

  const SearchBox = connectSearchBox(() => {
    return <></>;
  });

  const HitsPerPage = connectHitsPerPage(() => {
    return <></>;
  });

  const RefinementList = connectRefinementList(({ items }) => {
    return (
      <div>
        {items.map((item) => {
          return (
            <div key={item.label}>
              {item.label} {item.count}
            </div>
          );
        })}
      </div>
    );
  });

  const Pagination = connectPagination(({ nbPages }) => {
    return (
      <NumberArea
        min={1}
        max={nbPages}
        defaultValue={paginationValue}
        onChange={onChangeInput}
      />
    );
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
          <Select items={hitsPerPageItemsObject} onChange={onChangeSelect}></Select>

          <InstantSearch searchClient={searchClient} indexName={indexName}>
            <HitsPerPage defaultRefinement={hitsPerPageValue} items={hitsPerPageItems} />

            <SearchBox defaultRefinement={searchPageText} />

            {/* <RefinementList attribute="tags" defaultRefinement={[]} /> */}

            <Hits
              hitComponent={({ hit }) => {
                return <Link href={hit.nextLink}>{hit.title}</Link>;
              }}
            />

            <Pagination defaultRefinement={paginationValue}></Pagination>
          </InstantSearch>
        </StandardDialog>
      )}
    </>
  );
};
