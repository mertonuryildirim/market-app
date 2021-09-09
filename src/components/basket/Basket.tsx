import React from 'react';
import './Basket.css';
import BasketItems from './BasketItems';

const Basket = () => {
    return (
        <div className="basket">
            <h4>Basket</h4>
            <div className="card card-basket">
                <div className="container">
                    <BasketItems />
                    <BasketItems />
                    <BasketItems />
                </div>
            </div>
        </div>
    );
};

export default Basket;
