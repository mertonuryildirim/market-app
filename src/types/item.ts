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

export interface FilteringData {
    itemType: string;
    sort: string;
    order: 'asc' | 'desc';
    slug: string[];
    tags: string[];
    page: number;
    limit: 16;
}

export interface ItemState {
    items: Item[];
    loadingItem: boolean;
    errorItem: string;
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

export interface FILTER_ITEMS {
    type: typeof itemActionTypes.FILTER_ITEMS;
    payload: FilteringData[];
}

export interface FILTER_ITEMS_SUCCESS {
    type: typeof itemActionTypes.FILTER_ITEMS_SUCCESS;
    payload: Item[];
}

export interface FILTER_ITEMS_ERROR {
    type: typeof itemActionTypes.FILTER_ITEMS_ERROR;
}

export type ItemAction =
    | GET_ITEMS
    | GET_ITEMS_SUCCESS
    | GET_ITEMS_ERROR
    | FILTER_ITEMS
    | FILTER_ITEMS_SUCCESS
    | FILTER_ITEMS_ERROR;
