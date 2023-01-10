import React, { FC, useEffect, useState } from 'react';
import { useStyles } from './styles';
import classnames from 'classnames';
import {
  useSelectSearchItems,
  useSelectSearchItemsLoading,
  useSelectSearchString,
  useSelectSearchStatus,
  useGetSearchItems,
  useSelectSearchFilter,
  useFilterItems,
  useSelectSearchFilterOptions
} from 'src/store/search/hooks';
import { Search } from './search';
import { SearchItem } from './searchItem';
import { Filter } from './filter';

export const SearchPage: FC = () => {
  const styles = useStyles();
  const searchItems = useSelectSearchItems();
  const latestSearchString = useSelectSearchString();
  const [searchValue, setSearchValue] = useState(latestSearchString);
  const loading = useSelectSearchItemsLoading();
  const status = useSelectSearchStatus();
  const search = useGetSearchItems();
  const filterValue = useSelectSearchFilter();
  const setFilterValue = useFilterItems();
  const filterOptions = useSelectSearchFilterOptions();

  useEffect(() => {
    if (searchItems.length === 0) {
      search('');
    }
  }, []);

  return (
    <main
      className={classnames(styles.main, {
        loading
      })}
    >
      <div className={styles.filtersHolder}>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <Filter
          options={filterOptions}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          placeholder="Filter by region"
        />
      </div>
      {searchItems && searchItems.length > 0 && (
        <section className={styles.searchResultsContainer}>
          {searchItems.map((searchItem) => (
            <SearchItem key={searchItem.cca3} searchItem={searchItem} />
          ))}
        </section>
      )}
      {!loading && searchItems && searchItems.length === 0 && status > 0 && (
        <div className={styles.noResults}>No results found</div>
      )}
    </main>
  );
};
