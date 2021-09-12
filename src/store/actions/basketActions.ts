import {
    BasketItem,
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
} from '../../types/basket';
import { basketActionTypes } from './actionTypes';

export const addToBasket = (basketItem: BasketItem): ADD_TO_BASKET => ({
    type: basketActionTypes.ADD_TO_BASKET,
    payload: basketItem,
});

export const removeFromBasket = (
    basketItem: BasketItem,
): REMOVE_FROM_BASKET => ({
    type: basketActionTypes.REMOVE_FROM_BASKET,
    payload: basketItem,
});
