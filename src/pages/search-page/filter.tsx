import React, { FC } from 'react';
import Select, { OnChangeValue } from 'react-select';
import { IOption } from 'src/store/search/types';

export interface IProps {
  filterValue: IOption;
  setFilterValue: (filterValue: IOption) => void;
  options: IOption[];
  placeholder: string;
}

export const Filter: FC<IProps> = ({
  filterValue,
  setFilterValue,
  options,
  placeholder
}: IProps) => {
  const selectedValue =
    options.length === 1
      ? options[0]
      : options.find((o) => o.value === filterValue.value) || null;
  const onChangeFilter = (selectedOption: OnChangeValue<IOption, boolean>) => {
    setFilterValue({
      value: (selectedOption as IOption).value,
      label: (selectedOption as IOption).label
    });
  };

  return (
    <Select
      className="filter-select"
      isSearchable={false}
      isMulti={false}
      options={options}
      onChange={onChangeFilter}
      value={selectedValue}
      placeholder={placeholder}
    />
  );
};
