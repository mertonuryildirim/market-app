import React, { useState } from 'react';
import './Sidebar.css';

interface SortFilteringProps {
    handleFilteringDataChange: (e: any) => void;
}

const SortFiltering: React.FC<SortFilteringProps> = ({
    handleFilteringDataChange,
}) => {
    const [checkboxEvent, setCheckboxEvent] = useState({
        sortPriceAsc: false,
        sortPriceDesc: false,
        sortAddedDesc: false,
        sortAddedAsc: false,
    });

    return (
        <div className="card">
            <div className="container">
                <label className="sort-checkbox">
                    Price low to high
                    <input
                        type="checkbox"
                        name="sortPriceAsc"
                        checked={checkboxEvent.sortPriceAsc}
                        onClick={(e) => {
                            handleFilteringDataChange(e);
                            setCheckboxEvent({
                                sortPriceAsc: true,
                                sortPriceDesc: false,
                                sortAddedDesc: false,
                                sortAddedAsc: false,
                            });
                        }}
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="sort-checkbox">
                    Price high to low
                    <input
                        type="checkbox"
                        name="sortPriceDesc"
                        checked={checkboxEvent.sortPriceDesc}
                        onClick={(e) => {
                            handleFilteringDataChange(e);
                            setCheckboxEvent({
                                sortPriceAsc: false,
                                sortPriceDesc: true,
                                sortAddedDesc: false,
                                sortAddedAsc: false,
                            });
                        }}
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="sort-checkbox">
                    New to old
                    <input
                        type="checkbox"
                        name="sortAddedDesc"
                        checked={checkboxEvent.sortAddedDesc}
                        onClick={(e) => {
                            handleFilteringDataChange(e);
                            setCheckboxEvent({
                                sortPriceAsc: false,
                                sortPriceDesc: false,
                                sortAddedDesc: true,
                                sortAddedAsc: false,
                            });
                        }}
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="sort-checkbox">
                    Old to new
                    <input
                        type="checkbox"
                        name="sortAddedAsc"
                        checked={checkboxEvent.sortAddedAsc}
                        onClick={(e) => {
                            handleFilteringDataChange(e);
                            setCheckboxEvent({
                                sortPriceAsc: false,
                                sortPriceDesc: false,
                                sortAddedDesc: false,
                                sortAddedAsc: true,
                            });
                        }}
                    />
                    <span className="checkmark"></span>
                </label>
            </div>
        </div>
    );
};

export default SortFiltering;
