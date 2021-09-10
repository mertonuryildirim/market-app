import { ItemAction, Item, FilteringData } from '../../types/item';
import { itemActionTypes } from './actionTypes';

export const getItems = (filteringData: FilteringData): ItemAction => ({
    type: itemActionTypes.GET_ITEMS,
    payload: filteringData,
});

export const getItemsSuccess = (items: Item[]): ItemAction => ({
    type: itemActionTypes.GET_ITEMS_SUCCESS,
    payload: items,
});

export const getItemsError = (): ItemAction => ({
    type: itemActionTypes.GET_ITEMS_ERROR,
});
