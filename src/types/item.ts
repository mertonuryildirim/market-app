import { itemActionTypes } from '../store/actions/actionTypes';

//Single Item type
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

//Filtering Data Type. It uses for api query string params.
export interface FilteringData {
    itemType: '' | 'mug' | 'shirt';
    sort: '' | 'added' | 'price';
    order: '' | 'asc' | 'desc';
    manufacturer: string[];
    tags: string[];
    page: number;
    limit: number;
}

//Default item state
export interface ItemState {
    items: Item[];
    loadingItem: boolean;
    errorItem: string;
}

//Action type for GET_ITEMS
export interface GET_ITEMS {
    type: typeof itemActionTypes.GET_ITEMS;
    payload: FilteringData;
}

//Action type for GET_ITEMS_SUCCESS
export interface GET_ITEMS_SUCCESS {
    type: typeof itemActionTypes.GET_ITEMS_SUCCESS;
    payload: Item[];
}

//Action type for GET_ITEMS_ERROR
export interface GET_ITEMS_ERROR {
    type: typeof itemActionTypes.GET_ITEMS_ERROR;
}

export type ItemAction = GET_ITEMS | GET_ITEMS_SUCCESS | GET_ITEMS_ERROR;
