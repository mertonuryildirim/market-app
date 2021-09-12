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
                const newBasketItems = state.basketItems.map((basketItem) => {
                    if (
                        basketItem.product.slug === action.payload.product.slug
                    ) {
                        return {
                            ...basketItem,
                            quantity: basketItem.quantity + 1,
                            product: basketItem.product,
                        };
                    }
                    return basketItem;
                });
                return { ...state, basketItems: newBasketItems };
            } else {
                return {
                    ...state,
                    basketItems: [...state.basketItems, action.payload],
                };
            }
        case 'REMOVE_FROM_BASKET':
            const newState2 = state.basketItems.filter(
                (basketItem) =>
                    basketItem.product.slug !== action.payload.product.slug,
            );
            return { ...state, basketItems: newState2 };
        default:
            return state;
    }
};

export default basketReducer;
