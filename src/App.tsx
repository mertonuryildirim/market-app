import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './app.css';
import Basket from './components/basket/Basket';
import Feed from './components/feed/Feed';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { getCompanies } from './store/actions/companyActions';
import { getItems } from './store/actions/itemActions';
import { AppState } from './store/reducers';
import { FilteringData } from './types/item';

const App: React.FC = () => {
    const dispatch = useDispatch();
    //eslint-disable-next-line
    const { items, loadingItem, errorItem } = useSelector(
        (state: AppState) => state.items,
    );
    //eslint-disable-next-line
    const { companies, loadingCompany, errorCompany } = useSelector(
        (state: AppState) => state.companies,
    );

    const [filteringData, setFilteringData] = useState<FilteringData>({
        itemType: '',
        sort: '',
        order: '',
        manufacturer: [],
        tags: [],
        page: 1,
        limit: 1750,
    });

    const handleFilteringDataChange = (e: any) => {
        setFilteringData({ ...filteringData, [e.target.name]: e.target.value });
    };

    console.log(filteringData);

    useEffect(() => {
        dispatch(getCompanies());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getItems(filteringData));
    }, [dispatch, filteringData]);

    return (
        <div className="app">
            {/* Header */}
            <Header />

            {/* App Body */}
            <div className="app-body">
                {/* Sidebar */}
                <Sidebar companies={companies} items={items} />

                {/* Feed */}
                <Feed
                    items={items}
                    handleFilteringDataChange={handleFilteringDataChange}
                />

                {/* Widgets */}
                <Basket />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default App;
