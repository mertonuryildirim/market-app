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
            const addedBasketItem = state.basketItems.findIndex(
                (basketItem) =>
                    basketItem.product.slug === action.payload.product.slug,
            );
            if (state.basketItems[addedBasketItem].quantity > 1) {
                state.basketItems[addedBasketItem].quantity -= 1;
                return {
                    ...state,
                    basketItems: [...state.basketItems],
                };
            } else {
                return {
                    ...state,
                    basketItems: state.basketItems.filter(
                        (item) =>
                            item.product.slug !== action.payload.product.slug,
                    ),
                };
            }
        default:
            return state;
    }
};

export default basketReducer;
