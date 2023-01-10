import { IGeneralMessage, IGeneralMessageResponse } from 'src/types/global';
import { ISearchItem } from '../search-item/types';
import {
  GET_FILTER_ITEMS,
  GET_SEARCH_ITEMS_FAILURE,
  GET_SEARCH_ITEMS_REQUEST,
  GET_SEARCH_ITEMS_SUCCESS
} from './actionTypes';

export interface ISearchItems {
  searchItems: ISearchItem[];
  filteredSearchItems: Record<string, ISearchItem[]>;
}

export interface ISearchItemsState {
  data: ISearchItems;
  loading: boolean;
  error: IGeneralMessage;
  searchString: string;
  status: number;
  filterValue: IOption;
}

export interface IOption {
  value: string;
  label: string;
}

export interface ISearchItemsRequestPayload {
  searchString: string;
}

export interface IFitlerItemsPayload {
  filterValue: IOption;
}

export interface ISearchItemsSuccessPayload {
  data: ISearchItems;
  status: number;
}

export interface ISearchItemsFailurePayload {
  error: IGeneralMessageResponse;
}

export type GetSearchItemsRequestType = {
  type: typeof GET_SEARCH_ITEMS_REQUEST;
  payload: ISearchItemsRequestPayload;
};

export type GetSearchItemsSuccessType = {
  type: typeof GET_SEARCH_ITEMS_SUCCESS;
  payload: ISearchItemsSuccessPayload;
};

export type GetSearchItemsFailureType = {
  type: typeof GET_SEARCH_ITEMS_FAILURE;
  payload: ISearchItemsFailurePayload;
};

export type GetFitlerItemsType = {
  type: typeof GET_FILTER_ITEMS;
  payload: IFitlerItemsPayload;
};

export type SearchActionsTypes =
  | GetSearchItemsRequestType
  | GetSearchItemsSuccessType
  | GetSearchItemsFailureType
  | GetFitlerItemsType;
