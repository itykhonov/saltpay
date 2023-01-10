import {
  GET_FILTER_ITEMS,
  GET_SEARCH_ITEMS_FAILURE,
  GET_SEARCH_ITEMS_REQUEST,
  GET_SEARCH_ITEMS_SUCCESS
} from './actionTypes';
import {
  GetFitlerItemsType,
  GetSearchItemsFailureType,
  GetSearchItemsRequestType,
  GetSearchItemsSuccessType,
  IFitlerItemsPayload,
  ISearchItemsFailurePayload,
  ISearchItemsRequestPayload,
  ISearchItemsSuccessPayload
} from './types';

export const getSearchItemsRequest = (
  payload: ISearchItemsRequestPayload
): GetSearchItemsRequestType => ({
  type: GET_SEARCH_ITEMS_REQUEST,
  payload
});

export const getSearchItemsSuccess = (
  payload: ISearchItemsSuccessPayload
): GetSearchItemsSuccessType => ({
  type: GET_SEARCH_ITEMS_SUCCESS,
  payload
});

export const getSearchItemsFailure = (
  payload: ISearchItemsFailurePayload
): GetSearchItemsFailureType => ({
  type: GET_SEARCH_ITEMS_FAILURE,
  payload
});

export const getFilterItems = (
  payload: IFitlerItemsPayload
): GetFitlerItemsType => ({
  type: GET_FILTER_ITEMS,
  payload
});
