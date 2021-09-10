import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { getItemsService } from '../../utils/api';
import { itemActionTypes } from '../actions/actionTypes';
import { getItemsError, getItemsSuccess } from '../actions/itemActions';

function* handleGetItems(): any {
    try {
        const response = yield call(getItemsService);
        yield put(getItemsSuccess(response.data));
    } catch (error) {
        yield put(getItemsError());
    }
}

export default function* watchGetItemsSaga() {
    yield all([takeLatest(itemActionTypes.GET_ITEMS, handleGetItems)]);
}
