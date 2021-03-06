import { companyActionTypes } from '../store/actions/actionTypes';

//Single Company type
export interface Company {
    slug: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    account: number;
    contact: string;
}

//Default company state
export interface CompanyState {
    companies: Company[];
    loadingCompany: boolean;
    errorCompany: string;
}

//Action type for GET_COMPANIES
export interface GET_COMPANIES {
    type: typeof companyActionTypes.GET_COMPANIES;
}

//Action type for GET_COMPANIES_SUCCESS
export interface GET_COMPANIES_SUCCESS {
    type: typeof companyActionTypes.GET_COMPANIES_SUCCESS;
    payload: Company[];
}

//Action type for GET_COMPANIES_ERROR
export interface GET_COMPANIES_ERROR {
    type: typeof companyActionTypes.GET_COMPANIES_ERROR;
}

export type CompanyAction =
    | GET_COMPANIES
    | GET_COMPANIES_SUCCESS
    | GET_COMPANIES_ERROR;
