import React from 'react';
import { Item } from '../../types/item';
import './ProductCard.css';

interface ProductCardProps {
    product: Item;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const handleAddToBasket = (product: Item) => {
        console.log({ quantity: 1, product });
    };
    return (
        <div className="product-card">
            <div className="product-card-image">
                <span>
                    <img src="" alt="" />
                </span>
            </div>
            <p className="product-card-price">₺ {product.price}</p>
            <p style={{ height: '40px' }}>{product.name}</p>
            <button onClick={() => handleAddToBasket(product)}>Add</button>
        </div>
    );
};

export default ProductCard;
