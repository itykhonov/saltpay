import { GetSearchItemRequestType } from '../../types';
import { SagaIterator } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { getSearchItemFailure, getSearchItemSuccess } from '../../actions';
import { getSearchItem, getSearchItemBorders } from 'src/services/api';
import { borderCountriesAdapter } from '../../helper';

export function* getSearchItemWorker({
  payload: { id }
}: GetSearchItemRequestType): SagaIterator {
  try {
    const result = yield call(getSearchItem, id);
    if (result) {
      const borders = result.data[0].borders;
      let borderCountriesAdaptedData = [];
      if (borders && borders.length) {
        const borderCountries = yield call(getSearchItemBorders, borders);
        borderCountriesAdaptedData = borderCountries.data;
      }
      yield put(
        getSearchItemSuccess({
          data: {
            ...result.data[0],
            borderCountries: borderCountriesAdapter(borderCountriesAdaptedData)
          }
        })
      );
    } else {
      yield put(
        getSearchItemFailure({
          error: { message: 'No results GET_SEARCH_ITEM_BY_ID', status: 404 }
        })
      );
    }
  } catch (error: unknown) {
    yield put(
      getSearchItemFailure({
        error: { message: 'Request failed with status code 404', status: 404 }
      })
    );
  }
}
