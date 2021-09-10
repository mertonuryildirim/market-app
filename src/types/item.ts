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
    itemType: 'mug' | 'shirt';
    sort: 'added' | 'price';
    order: 'asc' | 'desc';
    manufacturer: string[]; //birden fazla olma durumu eksik.
    tags: string[];
    page: number;
    limit: number;
}

export interface ItemState {
    items: Item[];
    loadingItem: boolean;
    errorItem: string;
}

export interface GET_ITEMS {
    type: typeof itemActionTypes.GET_ITEMS;
    payload: FilteringData;
}

export interface GET_ITEMS_SUCCESS {
    type: typeof itemActionTypes.GET_ITEMS_SUCCESS;
    payload: Item[];
}

export interface GET_ITEMS_ERROR {
    type: typeof itemActionTypes.GET_ITEMS_ERROR;
}

export type ItemAction = GET_ITEMS | GET_ITEMS_SUCCESS | GET_ITEMS_ERROR;
