import React, { Fragment, useState } from 'react';
import { Item } from '../../types/item';
import './Basket.css';
import BasketItems from './BasketItems';

interface BasketProps {
    handleAddToBasket: (product: Item) => void;
}

const Basket: React.FC<BasketProps> = ({ handleAddToBasket }) => {
    // const { basketItems, loadingBasket, errorBasket } = useSelector(
    //     (state: AppState) => state.basketItems,
    // );
    const [basketItems] = useState([
        {
            quantity: 3,
            product: {
                tags: ['Trees', 'Beer'],
                price: 14.99,
                name: 'Ürün adı',
                description: 'Ürün açıklaması',
                slug: 'Unique ürün adı',
                manufacturer: 'deneme',
                itemType: 'shirt',
                added: 123123123123,
            },
        },
        {
            quantity: 2,
            product: {
                tags: ['Trees', 'Beer'],
                price: 19.99,
                name: 'Ürün adı 2',
                description: 'Ürün açıklaması',
                slug: 'Unique ürün adı',
                manufacturer: 'deneme',
                itemType: 'shirt',
                added: 123123123123,
            },
        },
    ]);

    return (
        <div className="basket">
            <h4>Basket</h4>
            <div className="card card-basket">
                <div className="container">
                    {basketItems.length > 0 ? (
                        basketItems.map((product) => {
                            return (
                                <Fragment key={product.product.slug}>
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

                    <div className="basket-total-price">₺ 45.97</div>
                </div>
            </div>
        </div>
    );
};

export default Basket;
