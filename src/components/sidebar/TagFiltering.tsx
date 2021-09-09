import React from 'react';
import { Item } from '../../types/item';
import './Sidebar.css';

interface TagFilteringProps {
    items: Item[];
}

const TagFiltering: React.FC<TagFilteringProps> = ({ items }) => {
    return (
        <div className="card">
            <div className="container">
                <input className="filter-search" placeholder="Search tag" />
                <div className="filter-overflow">
                    <label className="sort-checkbox">
                        All
                        <input type="checkbox" />
                        <span className="checkmark checkmark-square "></span>
                    </label>
                    <label className="sort-checkbox">
                        All
                        <input type="checkbox" />
                        <span className="checkmark checkmark-square "></span>
                    </label>
                    <label className="sort-checkbox">
                        All
                        <input type="checkbox" />
                        <span className="checkmark checkmark-square "></span>
                    </label>
                    <label className="sort-checkbox">
                        All
                        <input type="checkbox" />
                        <span className="checkmark checkmark-square "></span>
                    </label>
                    <label className="sort-checkbox">
                        All
                        <input type="checkbox" />
                        <span className="checkmark checkmark-square "></span>
                    </label>
                    <label className="sort-checkbox">
                        All
                        <input type="checkbox" />
                        <span className="checkmark checkmark-square "></span>
                    </label>
                    <label className="sort-checkbox">
                        All
                        <input type="checkbox" />
                        <span className="checkmark checkmark-square "></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default TagFiltering;
