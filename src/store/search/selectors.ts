import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const getSearchItems = (state: AppState) => {
  if (state.search.filterValue.value) {
    return state.search.data.filteredSearchItems[
      state.search.filterValue.value
    ];
  }
  return state.search.data.searchItems;
};
const getErrorSearchItems = (state: AppState) => state.search.error;
const getLoadingSearchItems = (state: AppState) => state.search.loading;
const getSearchStatus = (state: AppState) => state.search.status;
const getSearchString = (state: AppState) => state.search.searchString;
const getSearchFitler = (state: AppState) => state.search.filterValue;
const getSearchFitlerOptions = (state: AppState) =>
  Object.keys(state.search.data.filteredSearchItems).map((region) => ({
    value: region,
    label: region
  }));

export const searchItemsSelector = createSelector(
  getSearchItems,
  (searchItems) => searchItems
);

export const searchItemsErrorSelector = createSelector(
  getErrorSearchItems,
  (error) => error
);

export const searchItemsLoadingSelector = createSelector(
  getLoadingSearchItems,
  (loading) => loading
);

export const searchItemsSearchStringSelector = createSelector(
  getSearchString,
  (string) => string
);

export const searchStatusSelector = createSelector(
  getSearchStatus,
  (status) => status
);

export const searchFitlerSelector = createSelector(
  getSearchFitler,
  (filter) => filter
);

export const searchFitlerOptionsSelector = createSelector(
  getSearchFitlerOptions,
  (options) => options
);
