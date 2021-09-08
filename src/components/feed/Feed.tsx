import React from 'react';
import './Feed.css';
import ItemTypes from './ItemTypes';

const Feed = () => {
    return (
        <div className="feed">
            <h2>Products</h2>

            <ItemTypes />

            <div className="card">
                <div className="container">
                    <h4>
                        <b>Card Header</b>
                    </h4>
                    <p>Card Content</p>
                </div>
            </div>
        </div>
    );
};

export default Feed;
