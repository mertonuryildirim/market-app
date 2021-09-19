import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import './Sidebar.css';

interface TagFilteringProps {
    handleFilteringDataChange: (e: any) => void;
}

const TagFiltering: React.FC<TagFilteringProps> = ({
    handleFilteringDataChange,
}) => {
    //Items state
    const { items } = useSelector((state: AppState) => state.items);
    const [tagItems, setTagItems] = useState([]);
    const [tempTagsData, setTempTagsData] = useState([]);
    const [tagsSearchValue, setTagsSearchValue] = useState('');

    //Handle tags search value
    const handleTagsSearch = (e: any) => {
        setTagsSearchValue(e.target.value);

        if (e.target.value.length === 0) {
            setTagItems(tempTagsData);
        }
    };

    //Tags filtering.
    useEffect(() => {
        setTagItems(
            tempTagsData.filter((tag: string) =>
                tag
                    .toLocaleLowerCase('tr')
                    .includes(tagsSearchValue.toLocaleLowerCase('tr')),
            ),
        );
    }, [tagsSearchValue, tempTagsData]);

    //Code to find unique tag values when component renders
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
                {/* Searching tags input */}
                <input
                    className="filter-search"
                    placeholder="Search tag"
                    type="text"
                    name="searchTag"
                    value={tagsSearchValue}
                    onChange={(e) => handleTagsSearch(e)}
                />
                <div className="filter-overflow">
                    {/* Listing unique tag items. */}
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
