import { ItemAction, Item } from '../../types/item';

export const getItems = (): ItemAction => ({
    type: 'GET_ITEMS',
});

export const getItemsSuccess = (items: Item[]): ItemAction => ({
    type: 'GET_ITEMS_SUCCESS',
    payload: items,
});

export const getItemsError = (): ItemAction => ({
    type: 'GET_ITEMS_ERROR',
});
