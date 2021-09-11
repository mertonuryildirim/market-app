import React from 'react';
import './ItemTypes.css';

interface ItemTypesProps {
    handleFilteringDataChange: (e: any) => void;
}

const ItemTypes: React.FC<ItemTypesProps> = ({ handleFilteringDataChange }) => {
    return (
        <div className="item-types">
            <button
                name="itemType"
                value="mug"
                onClick={(e) => {
                    handleFilteringDataChange(e);
                }}
            >
                mug
            </button>
            <button
                name="itemType"
                value="shirt"
                onClick={(e) => {
                    handleFilteringDataChange(e);
                }}
            >
                shirt
            </button>
        </div>
    );
};

export default ItemTypes;
