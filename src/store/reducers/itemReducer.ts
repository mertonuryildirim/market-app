import { ItemAction, ItemState } from '../../types/item';

const defaultState: ItemState = {
    items: [],
    loadingItem: false,
    errorItem: '',
};

const itemReducer = (state: ItemState = defaultState, action: ItemAction) => {
    switch (action.type) {
        case 'GET_ITEMS':
            return { ...state, loadingItem: true, errorItem: '' };
        case 'GET_ITEMS_SUCCESS':
            return { ...state, loadingItem: false, items: action.payload };
        case 'GET_ITEMS_ERROR':
            return {
                ...state,
                loadingItem: false,
                errorItem: 'Error fetching items.!',
            };
        case 'FILTER_ITEMS':
            return { ...state, loadingItem: true, errorItem: '' };
        case 'FILTER_ITEMS_SUCCESS':
            return { ...state, loadingItem: false, items: action.payload };
        case 'FILTER_ITEMS_ERROR':
            return {
                ...state,
                loadingItem: false,
                errorItem: 'Error fetching items.!',
            };
        default:
            return state;
    }
};

export default itemReducer;
