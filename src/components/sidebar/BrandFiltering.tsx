import React from 'react';
import { Company } from '../../types/company';
import './Sidebar.css';

interface BrandFilteringProps {
    companies: Company[];
}

const BrandFiltering: React.FC<BrandFilteringProps> = ({ companies }) => {
    return (
        <div className="card">
            <div className="container">
                <input className="filter-search" placeholder="Search brand" />
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
                </div>
            </div>
        </div>
    );
};

export default BrandFiltering;
