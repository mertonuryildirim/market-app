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

interface GET_COMPANIES {
    type: 'GET_COMPANIES';
}

interface GET_COMPANIES_SUCCESS {
    type: 'GET_COMPANIES_SUCCESS';
    payload: Company[];
}

interface GET_COMPANIES_ERROR {
    type: 'GET_COMPANIES_ERROR';
}

export type CompanyAction =
    | GET_COMPANIES
    | GET_COMPANIES_SUCCESS
    | GET_COMPANIES_ERROR;
