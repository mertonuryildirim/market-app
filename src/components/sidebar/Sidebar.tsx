import React from 'react';
import { Company } from '../../types/company';
import { Item } from '../../types/item';
import BrandFiltering from './BrandFiltering';
import './Sidebar.css';
import SortFiltering from './SortFiltering';
import TagFiltering from './TagFiltering';

interface SidebarProps {
    companies: Company[];
    items: Item[];
    handleFilteringDataChange: (e: any) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    companies,
    items,
    handleFilteringDataChange,
}) => {
    return (
        <div className="sidebar">
            <div className="sidebar-filters">
                {/* Aside Sort Filtering */}
                <div>
                    <h5>Sorting</h5>
                    <SortFiltering
                        handleFilteringDataChange={handleFilteringDataChange}
                    />
                </div>

                {/* Aside Brands Filtering */}
                <div>
                    <h5>Brands</h5>
                    <BrandFiltering
                        companies={companies}
                        handleFilteringDataChange={handleFilteringDataChange}
                    />
                </div>

                {/* Aside Tags Filtering */}
                <div>
                    <h5>Tags</h5>
                    <TagFiltering
                        items={items}
                        handleFilteringDataChange={handleFilteringDataChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
