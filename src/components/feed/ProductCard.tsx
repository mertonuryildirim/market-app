import React from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../store/actions/basketActions';
import { Item } from '../../types/item';
import './ProductCard.css';

interface ProductCardProps {
    product: Item;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToBasket = (product: Item) => {
        dispatch(addToBasket({ quantity: 1, product }));
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
