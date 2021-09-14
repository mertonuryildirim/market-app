import React from 'react';
import { Company } from '../../types/company';
import { Item } from '../../types/item';
import ItemTypes from '../feed/ItemTypes';
import BrandFiltering from '../sidebar/BrandFiltering';
import SortFiltering from '../sidebar/SortFiltering';
import TagFiltering from '../sidebar/TagFiltering';

interface FilterModalProps {
    companies: Company[];
    items: Item[];
    handleFilteringDataChange: (e: any) => void;
    showFilterModal: boolean;
    handleCloseFilterModal: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
    companies,
    items,
    handleFilteringDataChange,
    showFilterModal,
    handleCloseFilterModal,
}) => {
    return (
        <div>
            {showFilterModal && (
                <div
                    className={`modal offcanvas-mobile-visibility-min ${
                        showFilterModal ? 'modal-display' : ''
                    }`}
                >
                    <div className="modal-content">
                        <span
                            onClick={handleCloseFilterModal}
                            className="close"
                        >
                            &times;
                        </span>

                        {/* Listing itemtypes for itemTypes filtering */}
                        <ItemTypes
                            handleFilteringDataChange={
                                handleFilteringDataChange
                            }
                        />

                        <div className="sidebar-filters">
                            {/* Modal Sort Filtering */}
                            <div>
                                <h5>Sorting</h5>
                                <SortFiltering
                                    handleFilteringDataChange={
                                        handleFilteringDataChange
                                    }
                                />
                            </div>

                            {/* Modal Brands Filtering */}
                            <div>
                                <h5>Brands</h5>
                                <BrandFiltering
                                    companies={companies}
                                    handleFilteringDataChange={
                                        handleFilteringDataChange
                                    }
                                />
                            </div>

                            {/* Modal Tags Filtering */}
                            <div>
                                <h5>Tags</h5>
                                <TagFiltering
                                    items={items}
                                    handleFilteringDataChange={
                                        handleFilteringDataChange
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterModal;
