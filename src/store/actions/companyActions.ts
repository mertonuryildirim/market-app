import { CompanyAction, CompanyState } from '../../types/company';

export const getCompanies = (): CompanyAction => ({
    type: 'GET_COMPANIES',
});

export const getCompaniesSuccess = (
    companies: CompanyState,
): CompanyAction => ({
    type: 'GET_COMPANIES_SUCCESS',
    payload: [],
});

export const getCompaniesError = (): CompanyAction => ({
    type: 'GET_COMPANIES_ERROR',
});
