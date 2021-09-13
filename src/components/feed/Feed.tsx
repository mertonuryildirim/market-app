import React, { Fragment, useState } from 'react';
import { Item } from '../../types/item';
import './Feed.css';
import ItemTypes from './ItemTypes';
import ProductCard from './ProductCard';
import Pagination from 'rc-pagination';

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
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(16);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const handleChangePage = (current: number) => {
        setCurrentPage(current);
        handlePaginationChange(current);
    };

    return (
        <div className="feed">
            <h2>Products</h2>

            {/* Listing itemtypes for itemTypes filtering */}
            <ItemTypes handleFilteringDataChange={handleFilteringDataChange} />

            {/* Listing all items. Changes with filtering api requests */}
            <div className="card">
                <div className="container">
                    {currentItems.map((item) => (
                        <Fragment key={item.slug}>
                            {/* Product card which containes single item information */}
                            <ProductCard
                                product={item}
                                handleAddToBasket={handleAddToBasket}
                            />
                        </Fragment>
                    ))}
                </div>

                <div className="center">
                    <div className="pagination">
                        <Pagination
                            current={currentPage}
                            total={1740}
                            defaultPageSize={itemsPerPage}
                            onChange={handleChangePage}
                            nextIcon="Next ->"
                            prevIcon="<- Prev"
                            jumpNextIcon="..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feed;
