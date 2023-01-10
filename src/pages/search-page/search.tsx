import React, {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  FC,
  KeyboardEvent,
  SetStateAction
} from 'react';
import { useStyles } from './styles';
import { useGetSearchItems } from 'src/store/search/hooks';
import { Search as SearchIcon } from '../../shared/icons/Search';

export interface IProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export const Search: FC<IProps> = ({ searchValue, setSearchValue }: IProps) => {
  const styles = useStyles();
  const search = useGetSearchItems();

  const onSearch = () => {
    search(searchValue);
  };

  const onChangeSearchInput = (
    event: ChangeEventHandler<HTMLInputElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const searchValue: string = (event as ChangeEvent<HTMLInputElement>).target
      .value;
    setSearchValue(searchValue);
    search(searchValue);
  };

  const onKeyDownSearchInput = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch();
    }
  };

  return (
    <div className={styles.searchInputHolder}>
      <SearchIcon />
      <input
        type="search"
        className="search-input"
        placeholder="Search for a country..."
        onChange={onChangeSearchInput}
        onKeyDown={onKeyDownSearchInput}
        value={searchValue}
      />
    </div>
  );
};
