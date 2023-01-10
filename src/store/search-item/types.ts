import { IGeneralMessage, IGeneralMessageResponse } from 'src/types/global';
import {
  GET_SEARCH_ITEM_FAILURE,
  GET_SEARCH_ITEM_REQUEST,
  GET_SEARCH_ITEM_SUCCESS
} from './actionTypes';

export interface ISearchItem {
  altSpellings: string[];
  area: number;
  borders: string[];
  capital: string[];
  capitalInfo: ICapitalInfo;
  car: ICar;
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: ICoatOfArms;
  continents: string[];
  currencies: Record<string, ICurrency>;
  demonyms: Record<string, IDemonym>;
  fifa: string;
  flag: string;
  flags: IFlag;
  gini: Record<string, number>;
  idd: IIdd;
  independent: boolean;
  landlocked: boolean;
  languages: Record<string, string>;
  latlng: number[];
  maps: IMap;
  name: IName;
  population: number;
  postalCode: IPostalCode;
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: Record<string, ITranslation>;
  unMember: boolean;
  borderCountries?: IBorderCountry[];
}

export interface IBorderCountry {
  name: string;
  code: string;
}

export interface ITranslation {
  common: string;
  official: string;
}

export interface IPostalCode {
  format: string;
  regex: string;
}

export interface IName {
  common: string;
  official: string;
  nativeName: Record<string, INativeName>;
}

export interface INativeName {
  common: string;
  official: string;
}

export interface IMap {
  googleMaps: string;
  openStreetMaps: string;
}

export interface IIdd {
  root: string;
  suffixes: string[];
}

export interface IFlag {
  png: string;
  svg: string;
}

export interface IDemonym {
  f: string;
  m: string;
}

export interface ICurrency {
  name: string;
  symbol: string;
}

export interface ICoatOfArms {
  png: string;
  svg: string;
}

export interface ICar {
  side: string;
  signs: string[];
}

export interface ICapitalInfo {
  latlng: number[];
}

export interface ISearchItemState {
  data: ISearchItem | undefined;
  loading: boolean;
  error: IGeneralMessage;
  status: number;
}

export interface ISearchItemRequestPayload {
  id: string;
}

export interface ISearchItemSuccessPayload {
  data: ISearchItem | undefined;
}

export interface ISearchItemFailurePayload {
  error: IGeneralMessageResponse;
}

export type GetSearchItemRequestType = {
  type: typeof GET_SEARCH_ITEM_REQUEST;
  payload: ISearchItemRequestPayload;
};

export type GetSearchItemSuccessType = {
  type: typeof GET_SEARCH_ITEM_SUCCESS;
  payload: ISearchItemSuccessPayload;
};

export type GetSearchItemFailureType = {
  type: typeof GET_SEARCH_ITEM_FAILURE;
  payload: ISearchItemFailurePayload;
};

export type SearchItemActionsTypes =
  | GetSearchItemRequestType
  | GetSearchItemSuccessType
  | GetSearchItemFailureType;
