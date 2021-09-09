import React, { Fragment } from 'react';
import { Item } from '../../types/item';
import './Feed.css';
import ItemTypes from './ItemTypes';
import ProductCard from './ProductCard';
import { usePagination } from 'use-pagination-hook';
import Pagination from 'rc-pagination';

interface FeedProps {
    items: Item[];
}

const Feed: React.FC<FeedProps> = ({ items }) => {
    const { current, display } = usePagination({
        items: items,
        size: 16,
    });

    const handleChange = (current: number, pageSize: number) => {
        console.log(current, pageSize);
    };

    return (
        <div className="feed">
            <h2>Products</h2>

            <ItemTypes />

            <div className="card">
                <div className="container">
                    {display.map((item) => (
                        <Fragment key={item.slug}>
                            <ProductCard
                                productName={item.name}
                                productPrice={item.price}
                            />
                        </Fragment>
                    ))}
                </div>

                <div className="center">
                    <div className="pagination">
                        <Pagination
                            current={current}
                            total={items.length}
                            defaultPageSize={16}
                            onChange={handleChange}
                            nextIcon=">"
                            prevIcon="<"
                            jumpNextIcon="..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feed;
