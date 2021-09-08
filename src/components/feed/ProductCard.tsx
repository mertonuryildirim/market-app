import React from 'react';
import './ProductCard.css';

const ProductCard = () => {
    return (
        <div className="product-card">
            <div className="product-card-image">
                <span>
                    <img src="" alt="" />
                </span>
            </div>
            <p className="product-card-price">₺ 19.99</p>
            <p>Gorgeous Office Mug</p>
            <button>Add</button>
        </div>
    );
};

export default ProductCard;
