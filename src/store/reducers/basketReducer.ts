import { BasketAction, BasketState } from '../../types/basket';

const defaultState: BasketState = {
    basketItems: [],
    loadingBasket: false,
    errorBasket: '',
};

const basketReducer = (
    state: BasketState = defaultState,
    action: BasketAction,
) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            var addedItem = state.basketItems.find(
                (basketItem) =>
                    basketItem.product.slug === action.payload.product.slug,
            );
            if (addedItem) {
                var newState = state.basketItems.map((basketItem) => {
                    if (
                        basketItem.product.slug === action.payload.product.slug
                    ) {
                        // return Object.assign({}, addedItem, {
                        //     quantity: addedItem.quantity + 1,
                        // });
                    }
                    return basketItem;
                });
                return newState;
            } else {
                return {
                    ...state,
                    loadingBasket: false,
                    error: '',
                    basketItems: [...state.basketItems, { ...action.payload }],
                };
            }
        case 'REMOVE_FROM_BASKET':
            const newState2 = state.basketItems.filter(
                (cartItem) =>
                    cartItem.product.slug !== action.payload.product.slug,
            );
            return newState2;
        default:
            return state;
    }
};

export default basketReducer;
