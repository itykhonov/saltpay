// import { ICandidate } from '../../store/candidate/types';
import React, { FC } from 'react';
import { useStyles } from './styles';
import { ERoutes } from '../../types/enums';
import { Image } from 'src/shared/image/image';
import { useNavigate } from 'react-router-dom';
import { ISearchItem } from 'src/store/search-item/types';

interface ISearchItemProps {
  searchItem: ISearchItem;
}

export const SearchItem: FC<ISearchItemProps> = ({
  searchItem
}: ISearchItemProps) => {
  const styles = useStyles();
  const navigate = useNavigate();

  const navigateToCandidatePage = (id: string): void => {
    navigate(`${ERoutes.search}/${id}`);
  };

  const {
    cca3,
    flags: { png },
    name: { official },
    population,
    region,
    capital
  }: ISearchItem = searchItem;

  return (
    <div className={styles.searchItem}>
      <div
        className="search-result-item"
        onClick={() => navigateToCandidatePage(cca3)}
      >
        <div className="image-holder">
          <Image src={png} alt={official} />
        </div>
        <h2>{official}</h2>
        <dl>
          {population > 0 && <dt>Population:</dt>}
          {population > 0 && <dd>{population.toLocaleString('en-US')}</dd>}
          {region && <dt>Region:</dt>}
          {region && <dd>{region}</dd>}
          {capital && <dt>Capital:</dt>}
          {capital && <dd>{capital}</dd>}
        </dl>
      </div>
    </div>
  );
};
