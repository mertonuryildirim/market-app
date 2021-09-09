import { takeLatest } from '@redux-saga/core/effects';
import { companyActionTypes } from '../actions/actionTypes';

function* handleGetCompanies() {}

export default function* watchGetCompaniesSaga() {
    yield takeLatest(companyActionTypes.GET_COMPANIES, handleGetCompanies);
}
