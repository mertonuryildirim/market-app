import {
    Item,
    FilteringData,
    GET_ITEMS,
    GET_ITEMS_ERROR,
    GET_ITEMS_SUCCESS,
} from '../../types/item';
import { itemActionTypes } from './actionTypes';

export const getItems = (filteringData: FilteringData): GET_ITEMS => ({
    type: itemActionTypes.GET_ITEMS,
    payload: filteringData,
});

export const getItemsSuccess = (items: Item[]): GET_ITEMS_SUCCESS => ({
    type: itemActionTypes.GET_ITEMS_SUCCESS,
    payload: items,
});

export const getItemsError = (): GET_ITEMS_ERROR => ({
    type: itemActionTypes.GET_ITEMS_ERROR,
});
