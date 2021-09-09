import { ItemAction, ItemState } from '../../types/item';

const defaultState: ItemState = {
    data: [],
    loading: false,
    error: '',
};

const itemReducer = (state: ItemState = defaultState, action: ItemAction) => {
    return state;
};

export default itemReducer;
