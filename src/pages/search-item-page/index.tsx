import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { LeftArrow } from 'src/shared/icons/LeftArrow';
import { Image } from 'src/shared/image/image';
import {
  useGetSearchItem,
  useSelectSearchItem,
  useSelectSearchItemLoading,
  useSelectRouterPathSearchItemID
} from 'src/store/search-item/hooks';
import {
  IBorderCountry,
  ICurrency,
  ISearchItem
} from 'src/store/search-item/types';
import { useStyles } from './styles';

export const SearchItemPage: FC = () => {
  const styles = useStyles();
  const searchItemId = useSelectRouterPathSearchItemID();
  const searchItem: ISearchItem | undefined = useSelectSearchItem();
  const loading: boolean = useSelectSearchItemLoading();
  const getSearchItem = useGetSearchItem();
  const navigate = useNavigate();

  const navigateTo = (route: string): void => {
    navigate(route);
  };

  useEffect(() => {
    if (searchItemId) {
      getSearchItem(searchItemId);
    }
  }, [getSearchItem, searchItemId]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!searchItem) {
    return (
      <div className={styles.noResult}>
        Did not find item by the id = {searchItemId}
      </div>
    );
  }
  const {
    flags: { png },
    name: { official, common },
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borderCountries
  }: ISearchItem = searchItem;

  const getCurrencies = (currencies: Record<string, ICurrency>) => {
    return Object.keys(currencies)
      .reduce((acc: string[], next: string) => {
        acc.push(currencies[next].name);
        return acc;
      }, [])
      .join(',');
  };

  const getBorderCountriesButtons = (borderCountries: IBorderCountry[]) => {
    return (
      borderCountries &&
      borderCountries?.map((c) => (
        <button onClick={() => navigateTo(`/search/${c.code}`)} key={c.code}>
          {c.name}
        </button>
      ))
    );
  };

  const currenciesValue = getCurrencies(currencies);
  const languagesValue = Object.values(languages).join(',');

  return (
    <div className={styles.wrapper}>
      <button className={styles.btnBack} onClick={() => navigateTo('/search')}>
        <LeftArrow />
        Back
      </button>
      <div className={styles.holder}>
        <div className={styles.column}>
          <div className={styles.imageHolder}>
            <Image src={png} alt={official} />
          </div>
        </div>
        <div className={styles.column}>
          <h1>{official}</h1>

          <div className={styles.info}>
            <dl>
              {common && <dt>Native name:</dt>}
              {common && <dd>{common}</dd>}
              {population > 0 && <dt>Population:</dt>}
              {population > 0 && <dd>{population.toLocaleString('en-US')}</dd>}
              {region && <dt>Region:</dt>}
              {region && <dd>{region}</dd>}
              {subregion && <dt>Sub Region:</dt>}
              {subregion && <dd>{subregion}</dd>}
              {capital && <dt>Capital:</dt>}
              {capital && <dd>{capital}</dd>}
            </dl>
            <dl>
              {tld.length > 0 && <dt>Top Level Domain:</dt>}
              {tld.length > 0 && <dd>{tld.join(',')}</dd>}
              {currenciesValue && <dt>Currencies:</dt>}
              {currenciesValue && <dd>{getCurrencies(currencies)}</dd>}
              {languagesValue && <dt>Languages:</dt>}
              {languagesValue && <dd>{languagesValue}</dd>}
            </dl>
          </div>
          {borderCountries && borderCountries?.length > 0 && (
            <div className={styles.borderCountriesHolder}>
              <dl>
                <dt>Border Countries:</dt>
                <dd>{getBorderCountriesButtons(borderCountries)}</dd>
              </dl>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
