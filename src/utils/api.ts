import axios from 'axios';
import { Company } from '../types/company';
import { Item } from '../types/item';

export const url = 'http://localhost:3003';

export const instance = axios.create({
    baseURL: url,
    headers: { 'Content-Type': 'application/json' },
});

export const getItemsService = () => instance.get<Item[]>('/items');

export const getCompaniesService = () => instance.get<Company[]>('/companies');

export const filterItemsService = () => instance.get<Item[]>('/items');
