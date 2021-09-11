import { call, put, takeLatest } from '@redux-saga/core/effects';
import { GET_ITEMS } from '../../types/item';
import { getItemsService } from '../../utils/api';
import { itemActionTypes } from '../actions/actionTypes';
import { getItemsError, getItemsSuccess } from '../actions/itemActions';

function* handleGetItems(action: GET_ITEMS): any {
    try {
        const response = yield call(getItemsService, action.payload);
        yield put(getItemsSuccess(response.data));
    } catch (error) {
        yield put(getItemsError());
    }
}

export default function* watchGetItemsSaga() {
    yield takeLatest(itemActionTypes.GET_ITEMS, handleGetItems);
}
