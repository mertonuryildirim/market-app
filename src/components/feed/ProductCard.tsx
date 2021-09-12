import React from 'react';
import { Item } from '../../types/item';
import './ProductCard.css';

interface ProductCardProps {
    product: Item;
    handleAddToBasket: (product: Item) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    product,
    handleAddToBasket,
}) => {
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
