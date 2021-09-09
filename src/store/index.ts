import { combineReducers } from 'redux';
import { CompanyState } from '../types/company';
import companyReducer from './reducers/companyReducer';

interface AppState {
    companies: CompanyState;
    items: any;
}

const rootReducer = combineReducers<AppState>({
    companies: companyReducer,
    items: () => {},
});

export default rootReducer;
