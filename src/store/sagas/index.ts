import { all } from 'redux-saga/effects';
import watchGetCompaniesSaga from './companiesSaga';
import watchGetItemsSaga from './itemsSaga';

//root saga
export default function* rootSaga() {
    yield all([watchGetCompaniesSaga(), watchGetItemsSaga()]);
}
