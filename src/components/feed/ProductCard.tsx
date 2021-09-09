import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
    productName: string;
    productPrice: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
    productName,
    productPrice,
}) => {
    return (
        <div className="product-card">
            <div className="product-card-image">
                <span>
                    <img src="" alt="" />
                </span>
            </div>
            <p className="product-card-price">₺ {productPrice}</p>
            <p>{productName}</p>
            <button>Add</button>
        </div>
    );
};

export default ProductCard;
