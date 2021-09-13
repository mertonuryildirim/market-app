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
            //Control the added item.
            let addedItem = state.basketItems.find(
                (basketItem) =>
                    basketItem.product.slug === action.payload.product.slug,
            );
            //If item added before. İncrease item quantity
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
                //If item not added before. Its new item.
            } else {
                return {
                    ...state,
                    basketItems: [...state.basketItems, action.payload],
                };
            }
        case 'REMOVE_FROM_BASKET':
            //Get the added item index
            const addedBasketItem = state.basketItems.findIndex(
                (basketItem) =>
                    basketItem.product.slug === action.payload.product.slug,
            );
            //If item quantity greater than 1, lower its quantity
            if (state.basketItems[addedBasketItem].quantity > 1) {
                state.basketItems[addedBasketItem].quantity -= 1;
                return {
                    ...state,
                    basketItems: [...state.basketItems],
                };
                //If item quantity lower than 1 it means 1 delete item from basket
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
