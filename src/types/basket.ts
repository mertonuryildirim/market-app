import { basketActionTypes } from '../store/actions/actionTypes';
import { Item } from './item';

//Basket item to for sending actions. ADD_TO_BASKET & REMOVE_FROM_BASKET
export interface BasketItem {
    quantity: number;
    product: Item;
}

//Default basket state
export interface BasketState {
    basketItems: BasketItem[];
    loadingBasket: false;
    errorBasket: '';
}

//Action type for ADD_TO_BASKET
export interface ADD_TO_BASKET {
    type: typeof basketActionTypes.ADD_TO_BASKET;
    payload: BasketItem;
}

//Action type for REMOVE_FROM_BASKET
export interface REMOVE_FROM_BASKET {
    type: typeof basketActionTypes.REMOVE_FROM_BASKET;
    payload: BasketItem;
}

export type BasketAction = ADD_TO_BASKET | REMOVE_FROM_BASKET;
