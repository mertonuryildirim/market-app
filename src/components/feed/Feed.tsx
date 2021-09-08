import React from 'react';
import './Feed.css';
import ItemTypes from './ItemTypes';
import ProductCard from './ProductCard';

const Feed = () => {
    return (
        <div className="feed">
            <h2>Products</h2>

            <ItemTypes />

            <div className="card">
                <div className="container">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    );
};

export default Feed;
