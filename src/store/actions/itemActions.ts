import { ItemAction, ItemState } from '../../types/item';

export const getItems = (): ItemAction => ({
    type: 'GET_ITEMS',
});

export const getItemsSuccess = (items: ItemState): ItemAction => ({
    type: 'GET_ITEMS_SUCCESS',
    payload: [],
});

export const getItemsError = (): ItemAction => ({
    type: 'GET_ITEMS_ERROR',
});
