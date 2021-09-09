import { ItemAction, Item } from '../../types/item';
import { itemActionTypes } from './actionTypes';

export const getItems = (): ItemAction => ({
    type: itemActionTypes.GET_ITEMS,
});

export const getItemsSuccess = (items: Item[]): ItemAction => ({
    type: itemActionTypes.GET_ITEMS_SUCCESS,
    payload: items,
});

export const getItemsError = (): ItemAction => ({
    type: itemActionTypes.GET_ITEMS_ERROR,
});
