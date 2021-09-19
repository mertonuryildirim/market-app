import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import './Sidebar.css';

interface BrandFilteringProps {
    handleFilteringDataChange: (e: any) => void;
}

const BrandFiltering: React.FC<BrandFilteringProps> = ({
    handleFilteringDataChange,
}) => {
    //Companies state
    const { companies } = useSelector((state: AppState) => state.companies);
    const [brandsSearchValue, setBrandsSearchValue] = useState('');

    const handleBrandsSearch = (e: any) => {
        setBrandsSearchValue(e.target.value);
    };

    return (
        <div className="card">
            <div className="container">
                {/* Searching brands input */}
                <input
                    className="filter-search"
                    placeholder="Search brand"
                    name="searchBrand"
                    value={brandsSearchValue}
                    onChange={(e) => handleBrandsSearch(e)}
                />
                <div className="filter-overflow">
                    {/* Listing companies. */}
                    {companies
                        .filter((company) =>
                            company.name
                                .toLocaleLowerCase('tr')
                                .includes(
                                    brandsSearchValue.toLocaleLowerCase('tr'),
                                ),
                        )
                        .map((company) => (
                            <label key={company.slug} className="sort-checkbox">
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
