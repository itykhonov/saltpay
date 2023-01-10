import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IGeneralMessage } from 'src/types/global';
import { ISearchItem } from '../search-item/types';
import { getFilterItems, getSearchItemsRequest } from './actions';
import {
  searchItemsSelector,
  searchItemsErrorSelector,
  searchItemsLoadingSelector,
  searchItemsSearchStringSelector,
  searchStatusSelector,
  searchFitlerSelector,
  searchFitlerOptionsSelector
} from './selectors';
import { IOption } from './types';

export const useSelectSearchItems: () => ISearchItem[] = () => {
  return useSelector(searchItemsSelector);
};

export const useSelectSearchItemsLoading: () => boolean = () => {
  return useSelector(searchItemsLoadingSelector);
};

export const useSelectSearchItemsError: () => IGeneralMessage = () => {
  return useSelector(searchItemsErrorSelector);
};

export const useGetSearchItems: () => (searchString: string) => void = () => {
  const dispatch = useDispatch();
  return useCallback(
    (searchString: string) => {
      dispatch(getSearchItemsRequest({ searchString }));
    },
    [dispatch]
  );
};

export const useFilterItems: () => (filterValue: IOption) => void = () => {
  const dispatch = useDispatch();
  return useCallback(
    (filterValue: IOption) => {
      dispatch(getFilterItems({ filterValue }));
    },
    [dispatch]
  );
};

export const useSelectSearchString: () => string = () => {
  return useSelector(searchItemsSearchStringSelector);
};

export const useSelectSearchStatus: () => number = () => {
  return useSelector(searchStatusSelector);
};

export const useSelectSearchFilter: () => IOption = () => {
  return useSelector(searchFitlerSelector);
};

export const useSelectSearchFilterOptions: () => IOption[] = () => {
  return useSelector(searchFitlerOptionsSelector);
};
