import React, { useState } from 'react';
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
    const [brandsSearchValue, setBrandsSearchValue] = useState('');

    const handleBrandsSearch = (e: any) => {
        setBrandsSearchValue(e.target.value);
    };

    return (
        <div className="card">
            <div className="container">
                <input
                    className="filter-search"
                    placeholder="Search brand"
                    name="searchBrand"
                    value={brandsSearchValue}
                    onChange={(e) => handleBrandsSearch(e)}
                />
                <div className="filter-overflow">
                    {companies
                        .filter((company) =>
                            company.name
                                .toLocaleLowerCase('tr')
                                .includes(
                                    brandsSearchValue.toLocaleLowerCase('tr'),
                                ),
                        )
                        .map((company) => (
                            <label
                                htmlFor="manufacturer"
                                key={company.slug}
                                className="sort-checkbox"
                            >
                                {company.name}
                                <input
                                    type="checkbox"
                                    name="manufacturer"
                                    value={company.slug}
                                    onChange={(e) =>
                                        handleFilteringDataChange(e)
                                    }
                                />
                                <span className="checkmark checkmark-square "></span>
                            </label>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default BrandFiltering;
