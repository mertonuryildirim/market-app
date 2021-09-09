import { CompanyAction, CompanyState } from '../../types/company';

const defaultState: CompanyState = {
    data: [],
    loading: false,
    error: '',
};

const companyReducer = (
    state: CompanyState = defaultState,
    action: CompanyAction,
) => {
    return state;
};

export default companyReducer;
