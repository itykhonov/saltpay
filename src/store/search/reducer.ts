import {
  GET_FILTER_ITEMS,
  GET_SEARCH_ITEMS_FAILURE,
  GET_SEARCH_ITEMS_REQUEST,
  GET_SEARCH_ITEMS_SUCCESS
} from './actionTypes';

import { ISearchItemsState, SearchActionsTypes } from './types';

const initialState: ISearchItemsState = {
  loading: false,
  error: '',
  data: {
    searchItems: [],
    filteredSearchItems: {}
  },
  status: 0,
  searchString: '',
  filterValue: {
    value: '',
    label: ''
  }
};

export default (
  state = initialState,
  action: SearchActionsTypes
): ISearchItemsState => {
  switch (action.type) {
    case GET_SEARCH_ITEMS_REQUEST:
      return {
        ...initialState,
        searchString: action.payload.searchString,
        loading: true
      };
    case GET_SEARCH_ITEMS_SUCCESS:
      return {
        ...state,
        data: {
          ...action.payload.data
        },
        status: action.payload.status,
        loading: false
      };
    case GET_SEARCH_ITEMS_FAILURE:
      return {
        ...initialState,
        status: action.payload.error.status,
        error: action.payload.error.message
      };
    case GET_FILTER_ITEMS:
      return {
        ...state,
        filterValue: action.payload.filterValue
      };
    default:
      return {
        ...state
      };
  }
};
