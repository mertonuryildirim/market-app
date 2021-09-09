import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { Item } from '../../types/item';
import api from '../../utils/api';
import { itemActionTypes } from '../actions/actionTypes';
import { filterItemsError, filterItemsSuccess } from '../actions/itemActions';

const filterItems = () => api.get<Item[]>('/items');

function* handleFilterItems(): any {
    try {
        const response = yield call(filterItems);
        yield put(filterItemsSuccess(response.data));
    } catch (error) {
        yield put(filterItemsError());
    }
}

export default function* watchFilterItemsSaga() {
    yield all([takeLatest(itemActionTypes.FILTER_ITEMS, handleFilterItems)]);
}
