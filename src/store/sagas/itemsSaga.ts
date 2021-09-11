import { call, put, takeLatest } from '@redux-saga/core/effects';
import { GET_ITEMS } from '../../types/item';
import { getItemsService } from '../../utils/api';
import { itemActionTypes } from '../actions/actionTypes';
import { getItemsError, getItemsSuccess } from '../actions/itemActions';

function* handleGetItems({ type, payload }: GET_ITEMS) {
    try {
        const { data } = yield call(getItemsService(payload) as any);
        yield put(getItemsSuccess(data));
    } catch (error) {
        yield put(getItemsError());
    }
}

export default function* watchGetItemsSaga() {
    yield takeLatest(itemActionTypes.GET_ITEMS, handleGetItems);
}
