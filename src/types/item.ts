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

interface GET_ITEMS {
    type: 'GET_ITEMS';
}

interface GET_ITEMS_SUCCESS {
    type: 'GET_ITEMS_SUCCESS';
    payload: Item[];
}

interface GET_ITEMS_ERROR {
    type: 'GET_ITEMS_ERROR';
}

export type ItemAction = GET_ITEMS | GET_ITEMS_SUCCESS | GET_ITEMS_ERROR;
