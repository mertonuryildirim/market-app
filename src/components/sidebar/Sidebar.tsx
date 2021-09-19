import React from 'react';
import BrandFiltering from './BrandFiltering';
import './Sidebar.css';
import SortFiltering from './SortFiltering';
import TagFiltering from './TagFiltering';

interface SidebarProps {
    handleFilteringDataChange: (e: any) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ handleFilteringDataChange }) => {
    return (
        <div className="sidebar offcanvas-mobile-visibility-max">
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
                        handleFilteringDataChange={handleFilteringDataChange}
                    />
                </div>

                {/* Aside Tags Filtering */}
                <div>
                    <h5>Tags</h5>
                    <TagFiltering
                        handleFilteringDataChange={handleFilteringDataChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
