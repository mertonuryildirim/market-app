import { companyActionTypes } from '../store/actions/actionTypes';

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

export interface CompanyState {
    data: Company[];
    loading: boolean;
    error: string;
}

export interface GET_COMPANIES {
    type: typeof companyActionTypes.GET_COMPANIES;
}

export interface GET_COMPANIES_SUCCESS {
    type: typeof companyActionTypes.GET_COMPANIES_SUCCESS;
    payload: Company[];
}

export interface GET_COMPANIES_ERROR {
    type: typeof companyActionTypes.GET_COMPANIES_ERROR;
}

export type CompanyAction =
    | GET_COMPANIES
    | GET_COMPANIES_SUCCESS
    | GET_COMPANIES_ERROR;
