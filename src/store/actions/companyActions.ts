import { CompanyAction, Company } from '../../types/company';

export const getCompanies = (): CompanyAction => ({
    type: 'GET_COMPANIES',
});

export const getCompaniesSuccess = (companies: Company[]): CompanyAction => ({
    type: 'GET_COMPANIES_SUCCESS',
    payload: companies,
});

export const getCompaniesError = (): CompanyAction => ({
    type: 'GET_COMPANIES_ERROR',
});
