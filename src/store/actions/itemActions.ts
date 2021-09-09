import { ItemState } from '../../types/item';

export const getItems = () => ({
    type: 'GET_ITEMS',
});

export const getItemsSuccess = (items: ItemState) => ({
    type: 'GET_ITEMS_SUCCESS',
    payload: items,
});

export const getItemsError = () => ({
    type: 'GET_ITEMS_ERROR',
});
