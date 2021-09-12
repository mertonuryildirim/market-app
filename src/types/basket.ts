import { basketActionTypes } from '../store/actions/actionTypes';
import { Item } from './item';

export interface BasketItem {
    quantity: number;
    product: Item;
}

export interface BasketState {
    basketItems: BasketItem[];
    loadingBasket: false;
    errorBasket: '';
}

export interface ADD_TO_BASKET {
    type: typeof basketActionTypes.ADD_TO_BASKET;
    payload: BasketItem;
}

export interface REMOVE_FROM_BASKET {
    type: typeof basketActionTypes.REMOVE_FROM_BASKET;
    payload: BasketItem;
}

export type BasketAction = ADD_TO_BASKET | REMOVE_FROM_BASKET;
