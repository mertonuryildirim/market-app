import React from 'react';
import './Sidebar.css';

const TagFiltering = () => {
    return (
        <div className="card">
            <div className="container">
                <input className="filter-search" placeholder="Search tag" />
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
    );
};

export default TagFiltering;
