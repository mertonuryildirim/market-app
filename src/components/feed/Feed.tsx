import React, { Fragment } from 'react';
import { Item } from '../../types/item';
import './Feed.css';
import ItemTypes from './ItemTypes';
import ProductCard from './ProductCard';

interface FeedProps {
    items: Item[];
    handleFilteringDataChange: (e: any) => void;
    handlePaginationChange: (pageNumber: number) => void;
    handleAddToBasket: (product: Item) => void;
}

const Feed: React.FC<FeedProps> = ({
    items,
    handleFilteringDataChange,
    handlePaginationChange,
    handleAddToBasket,
}) => {
    return (
        <div className="feed">
            <h2>Products</h2>

            <ItemTypes handleFilteringDataChange={handleFilteringDataChange} />

            <div className="card">
                <div className="container">
                    {items.map((item) => (
                        <Fragment key={item.slug}>
                            <ProductCard
                                product={item}
                                handleAddToBasket={handleAddToBasket}
                            />
                        </Fragment>
                    ))}
                </div>

                <div className="center">
                    <div className="pagination"></div>
                </div>
            </div>
        </div>
    );
};

export default Feed;
