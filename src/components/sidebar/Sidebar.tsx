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
}

const Sidebar: React.FC<SidebarProps> = ({ companies, items }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-filters">
                <div>
                    <h5>Sorting</h5>
                    <SortFiltering />
                </div>

                <div>
                    <h5>Brands</h5>
                    <BrandFiltering companies={companies} />
                </div>

                <div>
                    <h5>Tags</h5>
                    <TagFiltering items={items} />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
