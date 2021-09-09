import { CompanyState } from '../../types/company';

export const getCompanies = () => ({
    type: 'GET_COMPANIES',
});

export const getCompaniesSuccess = (companies: CompanyState) => ({
    type: 'GET_COMPANIES_SUCCESS',
    payload: companies,
});

export const getCompaniesError = () => ({
    type: 'GET_COMPANIES_ERROR',
});
