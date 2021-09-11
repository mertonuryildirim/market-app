import {
    CompanyAction,
    Company,
    GET_COMPANIES,
    GET_COMPANIES_SUCCESS,
    GET_COMPANIES_ERROR,
} from '../../types/company';
import { companyActionTypes } from './actionTypes';

export const getCompanies = (): GET_COMPANIES => ({
    type: companyActionTypes.GET_COMPANIES,
});

export const getCompaniesSuccess = (
    companies: Company[],
): GET_COMPANIES_SUCCESS => ({
    type: companyActionTypes.GET_COMPANIES_SUCCESS,
    payload: companies,
});

export const getCompaniesError = (): GET_COMPANIES_ERROR => ({
    type: companyActionTypes.GET_COMPANIES_ERROR,
});
