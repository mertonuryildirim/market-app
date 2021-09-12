import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../../store/actions/basketActions';
import { BasketItem } from '../../types/basket';
import { Item } from '../../types/item';

interface BasketItemsProps {
    handleAddToBasket: (product: Item) => void;
    product: BasketItem;
}

const BasketItems: React.FC<BasketItemsProps> = ({
    handleAddToBasket,
    product,
}) => {
    const dispatch = useDispatch();

    const handleRemoveFromBasket = (product: Item) => {
        dispatch(removeFromBasket({ quantity: 1, product }));
    };

    return (
        <div className="basket-items">
            <div className="basket-items-info">
                <p>{product.product.name}</p>
                <p>₺ {product.product.price}</p>
            </div>

            <div className="basket-items-quantity">
                <button onClick={() => handleRemoveFromBasket(product.product)}>
                    -{' '}
                </button>
                <div>
                    <p>{product.quantity}</p>
                </div>
                <button onClick={() => handleAddToBasket(product.product)}>
                    {' '}
                    +
                </button>
            </div>
        </div>
    );
};

export default BasketItems;
