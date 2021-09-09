import { combineReducers } from 'redux';
import { CompanyState } from '../../types/company';
import { ItemState } from '../../types/item';
import companyReducer from './companyReducer';
import itemReducer from './itemReducer';

interface AppState {
    companies: CompanyState;
    items: ItemState;
}

const rootReducer = combineReducers<AppState>({
    companies: companyReducer,
    items: itemReducer,
});

export default rootReducer;
