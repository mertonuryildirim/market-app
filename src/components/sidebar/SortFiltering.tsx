import React from 'react';
import './SortFiltering.css';

const SortFiltering = () => {
    return (
        <div className="card">
            <div className="container">
                <label className="sort-checkbox">
                    Price low to high
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="sort-checkbox">
                    Price high to low
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="sort-checkbox">
                    New to old
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="sort-checkbox">
                    Old to new
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </div>
        </div>
    );
};

export default SortFiltering;
