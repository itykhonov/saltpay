import { GetSearchItemsRequestType } from '../../types';
import { SagaIterator } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { getSearchItemsFailure, getSearchItemsSuccess } from '../../actions';
import { getSearchItems } from 'src/services/api';
import { searchItemsDataAdapter } from '../../helper';

export function* getSearchItemsWorker({
  payload: { searchString }
}: GetSearchItemsRequestType): SagaIterator {
  try {
    const result = yield call(getSearchItems, searchString);
    if (result) {
      yield put(
        getSearchItemsSuccess({
          data: searchItemsDataAdapter(result.data),
          status: result.status
        })
      );
    } else {
      yield put(
        getSearchItemsFailure({
          error: { message: 'No results SEARCH_ITEMS', status: 404 }
        })
      );
    }
  } catch (error: unknown) {
    yield put(
      getSearchItemsFailure({
        error: { message: 'Request failed with status code 404', status: 404 }
      })
    );
  }
}
