import { basketActionTypes } from '../store/actions/actionTypes';

export interface BasketItem {
    quantity: number;
    product: {
        tags: string[];
        price: number;
        name: string;
        description: string;
        slug: string;
        added: number;
        manufacturer: string;
        itemType: string;
    };
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
