import { combineReducers } from 'redux';
import { CompanyState } from '../../types/company';
import { ItemState } from '../../types/item';
import companyReducer from './companyReducer';
import itemReducer from './itemReducer';

export interface AppState {
    companies: CompanyState;
    items: ItemState;
}

const rootReducer = combineReducers<AppState>({
    companies: companyReducer,
    items: itemReducer,
});

export default rootReducer;
