import { itemActionTypes } from '../store/actions/actionTypes';

export interface Item {
    tags: string[];
    price: number;
    name: string;
    description: string;
    slug: string;
    added: number;
    manufacturer: string;
    itemType: string;
}

export interface ItemState {
    data: Item[];
    loading: boolean;
    error: string;
}

export interface GET_ITEMS {
    type: typeof itemActionTypes.GET_ITEMS;
}

export interface GET_ITEMS_SUCCESS {
    type: typeof itemActionTypes.GET_ITEMS_SUCCESS;
    payload: Item[];
}

export interface GET_ITEMS_ERROR {
    type: typeof itemActionTypes.GET_ITEMS_ERROR;
}

export type ItemAction = GET_ITEMS | GET_ITEMS_SUCCESS | GET_ITEMS_ERROR;
