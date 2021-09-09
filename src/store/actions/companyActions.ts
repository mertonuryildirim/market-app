import { CompanyAction, Company } from '../../types/company';
import { companyActionTypes } from './actionTypes';

export const getCompanies = (): CompanyAction => ({
    type: companyActionTypes.GET_COMPANIES,
});

export const getCompaniesSuccess = (companies: Company[]): CompanyAction => ({
    type: companyActionTypes.GET_COMPANIES_SUCCESS,
    payload: companies,
});

export const getCompaniesError = (): CompanyAction => ({
    type: companyActionTypes.GET_COMPANIES_ERROR,
});
