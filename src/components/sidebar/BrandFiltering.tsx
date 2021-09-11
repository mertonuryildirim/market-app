import React from 'react';
import { Company } from '../../types/company';
import './Sidebar.css';

interface BrandFilteringProps {
    companies: Company[];
    handleFilteringDataChange: (e: any) => void;
}

const BrandFiltering: React.FC<BrandFilteringProps> = ({
    companies,
    handleFilteringDataChange,
}) => {
    return (
        <div className="card">
            <div className="container">
                <input className="filter-search" placeholder="Search brand" />
                <div className="filter-overflow">
                    {companies.map((company) => (
                        <label key={company.slug} className="sort-checkbox">
                            {company.name}
                            <input type="checkbox" />
                            <span className="checkmark checkmark-square "></span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandFiltering;
