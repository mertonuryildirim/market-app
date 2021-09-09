import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { Company } from '../../types/company';
import api from '../../utils/api';
import { companyActionTypes } from '../actions/actionTypes';
import {
    getCompaniesError,
    getCompaniesSuccess,
} from '../actions/companyActions';

const getCompanies = () => api.get<Company[]>('/companies');

function* handleGetCompanies(): any {
    try {
        const response = yield call(getCompanies);
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
