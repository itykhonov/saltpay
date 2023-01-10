import { IBorderCountry, ISearchItem } from './types';

export const borderCountriesAdapter = (
  borderCountries: ISearchItem[]
): IBorderCountry[] =>
  borderCountries.map((item: ISearchItem) => ({
    name: item.name.official,
    code: item.cca3
  }));
