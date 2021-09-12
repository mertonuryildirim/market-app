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
            let addedItem = state.basketItems.find(
                (basketItem) =>
                    basketItem.product.slug === action.payload.product.slug,
            );
            if (addedItem) {
                return state.basketItems.map((cartItem) =>
                    cartItem.product.slug === action.payload.product.slug
                        ? {
                              ...cartItem.product,
                              quantity: cartItem.quantity + 1,
                          }
                        : cartItem.product,
                );
            } else {
                return [...state.basketItems, { ...action.payload }];
            }
        case 'REMOVE_FROM_BASKET':
            return state.basketItems.filter(
                (cartItem) =>
                    cartItem.product.slug !== action.payload.product.slug,
            );
        default:
            return state;
    }
};

export default basketReducer;
