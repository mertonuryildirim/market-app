import { ItemAction, Item, FilteringData } from '../../types/item';
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

export const filterItems = (filteringData: FilteringData[]): ItemAction => ({
    type: itemActionTypes.FILTER_ITEMS,
    payload: filteringData,
});

export const filterItemsSuccess = (items: Item[]): ItemAction => ({
    type: itemActionTypes.FILTER_ITEMS_SUCCESS,
    payload: items,
});

export const filterItemsError = (): ItemAction => ({
    type: itemActionTypes.FILTER_ITEMS_ERROR,
});
