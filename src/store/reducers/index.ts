import { combineReducers } from 'redux';
//import { BasketState } from '../../types/basket';
import { CompanyState } from '../../types/company';
import { ItemState } from '../../types/item';
//import basketReducer from './basketReducer';
import companyReducer from './companyReducer';
import itemReducer from './itemReducer';

export interface AppState {
    companies: CompanyState;
    items: ItemState;
    //basketItems: BasketState;
}

const rootReducer = combineReducers<AppState>({
    companies: companyReducer,
    items: itemReducer,
    //basketItems: basketReducer,
});

export default rootReducer;
