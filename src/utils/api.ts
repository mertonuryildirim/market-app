import axios from 'axios';
import { Company } from '../types/company';
import { FilteringData, Item } from '../types/item';

export const url = 'http://localhost:3003';

export const instance = axios.create({
    baseURL: url,
    headers: { 'Content-Type': 'application/json' },
});

export const getItemsService = (itemFilteringData: FilteringData) => {
    const { itemType, sort, order, manufacturer, tags, page, limit } =
        itemFilteringData;
    instance
        .get<Item[]>(
            `/items?itemType_like=${itemType}&_sort=${sort}&_order=${order}&manufacturer_like=${manufacturer}&tags_like=${tags}&_page=${page}&_limit=${limit}`,
        )
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getCompaniesService = () =>
    instance
        .get<Company[]>('/companies')
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        });
