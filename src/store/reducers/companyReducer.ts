import { CompanyAction, CompanyState } from '../../types/company';

const defaultState: CompanyState = {
    companies: [],
    loading: false,
    error: '',
};

const companyReducer = (
    state: CompanyState = defaultState,
    action: CompanyAction,
) => {
    switch (action.type) {
        case 'GET_COMPANIES':
            return { ...state, loading: true, error: '' };
        case 'GET_COMPANIES_SUCCESS':
            return { ...state, loading: false, companies: action.payload };
        case 'GET_COMPANIES_ERROR':
            return {
                ...state,
                loading: false,
                error: 'Error fetching companies.!',
            };
        default:
            return state;
    }
};

export default companyReducer;
