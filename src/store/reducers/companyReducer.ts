import { CompanyAction, CompanyState } from '../../types/company';

const defaultState: CompanyState = {
    companies: [],
    loadingCompany: false,
    errorCompany: '',
};

const companyReducer = (
    state: CompanyState = defaultState,
    action: CompanyAction,
) => {
    switch (action.type) {
        case 'GET_COMPANIES':
            return { ...state, loadingCompany: true, errorCompany: '' };
        case 'GET_COMPANIES_SUCCESS':
            return {
                ...state,
                loadingCompany: false,
                companies: action.payload,
            };
        case 'GET_COMPANIES_ERROR':
            return {
                ...state,
                loadingCompany: false,
                errorCompany: 'Error fetching companies.!',
            };
        default:
            return state;
    }
};

export default companyReducer;
