import { takeLatest } from '@redux-saga/core/effects';
import { itemActionTypes } from '../actions/actionTypes';

function* handleGetItems() {}

export default function* watchGetItemsSaga() {
    yield takeLatest(itemActionTypes.GET_ITEMS, handleGetItems);
}
