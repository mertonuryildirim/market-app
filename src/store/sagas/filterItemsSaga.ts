import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { filterItemsService } from '../../utils/api';
import { itemActionTypes } from '../actions/actionTypes';
import { filterItemsError, filterItemsSuccess } from '../actions/itemActions';

function* handleFilterItems(): any {
    try {
        const response = yield call(filterItemsService);
        yield put(filterItemsSuccess(response.data));
    } catch (error) {
        yield put(filterItemsError());
    }
}

export default function* watchFilterItemsSaga() {
    yield all([takeLatest(itemActionTypes.FILTER_ITEMS, handleFilterItems)]);
}
