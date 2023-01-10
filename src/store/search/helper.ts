import { ISearchItem } from '../search-item/types';
import { ISearchItems } from './types';

export const searchItemsDataAdapter = (
  searchItems: ISearchItem[]
): ISearchItems => {
  const sortedSearchItemsByPopulation =
    sortSearchItemsByPopulation(searchItems);
  const filteredSearchItemsByRegion = sortedSearchItemsByPopulation.reduce(
    (acc: Record<string, ISearchItem[]>, next: ISearchItem) => {
      if (!acc[next.region]) {
        acc[next.region] = [];
      }
      acc[next.region].push(next);
      return acc;
    },
    {}
  );
  return {
    searchItems: sortedSearchItemsByPopulation,
    filteredSearchItems: filteredSearchItemsByRegion
  };
};

export const sortSearchItemsByPopulation = (
  searchItems: ISearchItem[]
): ISearchItem[] => {
  return searchItems.sort((a, b) => b.population - a.population);
};
