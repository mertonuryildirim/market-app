import { ItemAction, ItemState } from '../../types/item';

const defaultState: ItemState = {
    items: [],
    loading: false,
    error: '',
};

const itemReducer = (state: ItemState = defaultState, action: ItemAction) => {
    switch (action.type) {
        case 'GET_ITEMS':
            return { ...state, loading: true, error: '' };
        case 'GET_ITEMS_SUCCESS':
            return { ...state, loading: false, items: action.payload };
        case 'GET_ITEMS_ERROR':
            return {
                ...state,
                loading: false,
                error: 'Error fetching items.!',
            };
        default:
            return state;
    }
};

export default itemReducer;
