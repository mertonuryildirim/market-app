import React, { useEffect, useState } from 'react';
import { Item } from '../../types/item';
import './Sidebar.css';

interface TagFilteringProps {
    items: Item[];
    handleFilteringDataChange: (e: any) => void;
}

const TagFiltering: React.FC<TagFilteringProps> = ({
    items,
    handleFilteringDataChange,
}) => {
    const [tagItems, setTagItems] = useState([]);
    const [tempTagsData, setTempTagsData] = useState([]);
    const [tagsSearchValue, setTagsSearchValue] = useState('');

    const handleTagsSearch = (e: any) => {
        setTagsSearchValue(e.target.value);

        if (e.target.value.length === 0) {
            setTagItems(tempTagsData);
        }
    };

    useEffect(() => {
        setTagItems(
            tempTagsData.filter((tag: string) =>
                tag
                    .toLocaleLowerCase('tr')
                    .includes(tagsSearchValue.toLocaleLowerCase('tr')),
            ),
        );
    }, [tagsSearchValue, tempTagsData]);

    useEffect(() => {
        const allTagItems: any = [];

        items.map((item) => {
            return item.tags.map((tag) => {
                return allTagItems.push(tag);
            });
        });

        const uniqueTagItems = allTagItems.filter(
            (item: any, index: any, arrRef: any) =>
                arrRef.indexOf(item) === index,
        );

        setTagItems(uniqueTagItems);
        setTempTagsData(uniqueTagItems);
    }, [items]);

    return (
        <div className="card">
            <div className="container">
                <input
                    className="filter-search"
                    placeholder="Search tag"
                    type="text"
                    name="searchTag"
                    value={tagsSearchValue}
                    onChange={(e) => handleTagsSearch(e)}
                />
                <div className="filter-overflow">
                    {tagItems.map((tag: any) => (
                        <label key={tag} className="sort-checkbox">
                            {tag}
                            <input
                                type="checkbox"
                                name="tags"
                                value={tag}
                                onClick={(e) => {
                                    handleFilteringDataChange(e);
                                }}
                            />
                            <span className="checkmark checkmark-square "></span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TagFiltering;
