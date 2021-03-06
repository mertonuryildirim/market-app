import React, { Fragment } from 'react';
import { BasketItem } from '../../types/basket';
import { Item } from '../../types/item';
import './Basket.css';
import BasketItems from './BasketItems';

interface BasketProps {
    handleAddToBasket: (product: Item) => void;
    basketItems: BasketItem[];
    handleCalculateTotalPrice: () => void;
}

const Basket: React.FC<BasketProps> = ({
    handleAddToBasket,
    basketItems,
    handleCalculateTotalPrice,
}) => {
    return (
        <div className="basket offcanvas-mobile-visibility-max">
            <h4>Basket</h4>
            <div className="card card-basket">
                <div className="container">
                    {/* List basket items when basketItems length greater than zero. Otherwise show empty basket message */}
                    {basketItems.length > 0 ? (
                        basketItems.map((product) => {
                            return (
                                <Fragment key={product.product.slug}>
                                    {/* Every basket item component. Containes basket item information & addToCart / removeFromCart Actions */}
                                    <BasketItems
                                        product={product}
                                        handleAddToBasket={handleAddToBasket}
                                    />
                                </Fragment>
                            );
                        })
                    ) : (
                        <>There are no items in your basket.!</>
                    )}

                    <div className="basket-total-price">
                        ₺ {handleCalculateTotalPrice()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;
