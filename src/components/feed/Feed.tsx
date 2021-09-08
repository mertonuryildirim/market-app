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
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>

                <div className="center">
                    <div className="pagination">
                        {/* eslint-disable-next-line */}
                        <a href="">&laquo; Prev</a>{' '}
                        {/* eslint-disable-next-line */}
                        <a href="">1</a> {/* eslint-disable-next-line */}
                        <a href="">2</a> {/* eslint-disable-next-line */}
                        <a href="">3</a> {/* eslint-disable-next-line */}
                        <a href="">4</a> {/* eslint-disable-next-line */}
                        <a href="">5</a> {/* eslint-disable-next-line */}
                        <a href="">6</a> {/* eslint-disable-next-line */}
                        <a href="">Next &raquo;</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feed;
