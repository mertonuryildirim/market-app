import React from 'react';
import { Item } from '../../types/item';
import './Sidebar.css';

interface TagFilteringProps {
    items: Item[];
    handleFilteringDataChange: (e: any) => void;
}

const TagFiltering: React.FC<TagFilteringProps> = ({
    items,
    handleFilteringDataChange,
}) => {
    const allTagItems: any = [];

    items.map((item) => {
        return item.tags.map((tag) => {
            return allTagItems.push(tag);
        });
    });

    const uniqueTagItems = allTagItems.filter(
        (item: any, index: any, arrRef: any) => arrRef.indexOf(item) === index,
    );

    return (
        <div className="card">
            <div className="container">
                <input className="filter-search" placeholder="Search tag" />
                <div className="filter-overflow">
                    {uniqueTagItems.map((tag: any) => (
                        <label key={tag} className="sort-checkbox">
                            {tag}
                            <input
                                type="checkbox"
                                name="tags"
                                value={tag}
                                onChange={(e) => {
                                    handleFilteringDataChange(e);
                                }}
                            />
                            <span className="checkmark checkmark-square "></span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TagFiltering;
