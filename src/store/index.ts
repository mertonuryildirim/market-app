import { combineReducers } from 'redux';
import { CompanyState } from '../types/company';
import { ItemState } from '../types/item';
import companyReducer from './reducers/companyReducer';
import itemReducer from './reducers/itemReducer';

interface AppState {
    companies: CompanyState;
    items: ItemState;
}

const rootReducer = combineReducers<AppState>({
    companies: companyReducer,
    items: itemReducer,
});

export default rootReducer;
