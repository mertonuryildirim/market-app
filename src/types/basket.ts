import { basketActionTypes } from '../store/actions/actionTypes';

export interface BasketItem {
    tags: string[];
    price: number;
    name: string;
    description: string;
    slug: string;
    added: number;
    manufacturer: string;
    itemType: string;
    quantity: number;
}

export interface BasketState {
    items: BasketItem[];
    loadingBasket: false;
    errorBasket: '';
}

export interface ADD_TO_BASKET {
    type: typeof basketActionTypes.ADD_TO_BASKET;
    payload: BasketItem[];
}

export interface ADD_TO_BASKET_SUCCESS {
    type: typeof basketActionTypes.ADD_TO_BASKET_SUCCESS;
}

export interface ADD_TO_BASKET_ERROR {
    type: typeof basketActionTypes.ADD_TO_BASKET_ERROR;
}

export interface REMOVE_FROM_BASKET {
    type: typeof basketActionTypes.REMOVE_FROM_BASKET;
    payload: BasketItem[];
}

export interface REMOVE_FROM_BASKET_SUCCESS {
    type: typeof basketActionTypes.REMOVE_FROM_BASKET_SUCCESS;
}

export interface REMOVE_FROM_BASKET_ERROR {
    type: typeof basketActionTypes.REMOVE_FROM_BASKET_ERROR;
}

export type BasketAction =
    | ADD_TO_BASKET
    | ADD_TO_BASKET_SUCCESS
    | ADD_TO_BASKET_ERROR
    | REMOVE_FROM_BASKET
    | REMOVE_FROM_BASKET_SUCCESS
    | REMOVE_FROM_BASKET_ERROR;
