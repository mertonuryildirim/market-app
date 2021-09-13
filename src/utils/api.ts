import axios from 'axios';
import { Company } from '../types/company';
import { FilteringData, Item } from '../types/item';

export const url = 'https://market-app-assignment.herokuapp.com/api';

export const instance = axios.create({
    baseURL: url,
    headers: { 'Content-Type': 'application/json' },
});

export const getItemsService = async (
    itemFilteringData: FilteringData,
): Promise<Item[]> => {
    const { itemType, sort, order, manufacturer, tags, page, limit } =
        itemFilteringData;

    const manufacturerQueryStringParams = manufacturer.map((item) => {
        return `&manufacturer_like=${item}`;
    });

    const handleDynamicManufacturerParam = () => {
        return manufacturerQueryStringParams.length > 0
            ? manufacturerQueryStringParams
                  .map((manufacturer) => manufacturer)
                  .join('')
            : '&manufacturer_like=';
    };

    return await instance.get(
        `/items?itemType_like=${itemType}&_sort=${sort}&_order=${order}${handleDynamicManufacturerParam()}&tags_like=${tags}&_page=${page}&_limit=${limit}`,
    );
};

export const getCompaniesService = async (): Promise<Company[]> => {
    return await instance.get('/companies');
};
