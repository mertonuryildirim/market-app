import React from 'react';
import BrandFiltering from './BrandFiltering';
import './Sidebar.css';
import SortFiltering from './SortFiltering';
import TagFiltering from './TagFiltering';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-filters">
                <div>
                    <h4>Sorting</h4>
                    <SortFiltering />
                </div>

                <div>
                    <h4>Brands</h4>
                    <BrandFiltering />
                </div>

                <div>
                    <h4>Tags</h4>
                    <TagFiltering />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
