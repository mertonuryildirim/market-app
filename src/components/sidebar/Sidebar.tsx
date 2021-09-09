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
                    <h5>Sorting</h5>
                    <SortFiltering />
                </div>

                <div>
                    <h5>Brands</h5>
                    <BrandFiltering />
                </div>

                <div>
                    <h5>Tags</h5>
                    <TagFiltering />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
