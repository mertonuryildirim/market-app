import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { Item } from '../../types/item';
import api from '../../utils/api';
import { itemActionTypes } from '../actions/actionTypes';
import { getItemsError, getItemsSuccess } from '../actions/itemActions';

const getItems = () => api.get<Item[]>('/items');

function* handleGetItems(): any {
    try {
        const response = yield call(getItems);
        yield put(getItemsSuccess(response.data));
    } catch (error) {
        yield put(getItemsError());
    }
}

export default function* watchGetItemsSaga() {
    yield all([takeLatest(itemActionTypes.GET_ITEMS, handleGetItems)]);
}
