import {
    ADD_TO_BASKET,
    ADD_TO_BASKET_SUCCESS,
    ADD_TO_BASKET_ERROR,
    BasketItem,
    REMOVE_FROM_BASKET,
    REMOVE_FROM_BASKET_SUCCESS,
    REMOVE_FROM_BASKET_ERROR,
} from '../../types/basket';
import { basketActionTypes } from './actionTypes';

export const addToBasket = (basketItem: BasketItem[]): ADD_TO_BASKET => ({
    type: basketActionTypes.ADD_TO_BASKET,
    payload: basketItem,
});

export const addToBasketSuccess = (): ADD_TO_BASKET_SUCCESS => ({
    type: basketActionTypes.ADD_TO_BASKET_SUCCESS,
});

export const addToBasketError = (): ADD_TO_BASKET_ERROR => ({
    type: basketActionTypes.ADD_TO_BASKET_ERROR,
});

export const removeFromBasket = (
    basketItem: BasketItem[],
): REMOVE_FROM_BASKET => ({
    type: basketActionTypes.REMOVE_FROM_BASKET,
    payload: basketItem,
});

export const removeFromBasketSuccess = (): REMOVE_FROM_BASKET_SUCCESS => ({
    type: basketActionTypes.REMOVE_FROM_BASKET_SUCCESS,
});

export const removeFromBasketError = (): REMOVE_FROM_BASKET_ERROR => ({
    type: basketActionTypes.REMOVE_FROM_BASKET_ERROR,
});
