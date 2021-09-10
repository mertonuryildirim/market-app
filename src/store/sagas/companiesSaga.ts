import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { getCompaniesService } from '../../utils/api';
import { companyActionTypes } from '../actions/actionTypes';
import {
    getCompaniesError,
    getCompaniesSuccess,
} from '../actions/companyActions';

function* handleGetCompanies(): any {
    try {
        const response = yield call(getCompaniesService);
        yield put(getCompaniesSuccess(response.data));
    } catch (error) {
        yield put(getCompaniesError());
    }
}

export default function* watchGetCompaniesSaga() {
    yield all([
        takeLatest(companyActionTypes.GET_COMPANIES, handleGetCompanies),
    ]);
}
