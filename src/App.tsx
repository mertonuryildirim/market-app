import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './app.css';
import Basket from './components/basket/Basket';
import Feed from './components/feed/Feed';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { addToBasket } from './store/actions/basketActions';
import { getCompanies } from './store/actions/companyActions';
import { getItems } from './store/actions/itemActions';
import { AppState } from './store/reducers';
import { FilteringData, Item } from './types/item';

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
    //eslint-disable-next-line
    const { basketItems, loadingBasket, errorBasket } = useSelector(
        (state: AppState) => state.basketItems,
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

    const handlePaginationChange = (pageNumber: number) => {
        setFilteringData({
            ...filteringData,
            page: pageNumber,
        });
    };

    //TODO: Refactor the code
    const handleFilteringDataChange = (e: any) => {
        if (e.target.name === 'sortPriceAsc') {
            e.target.checked
                ? setFilteringData({
                      ...filteringData,
                      sort: 'price',
                      order: 'asc',
                  })
                : setFilteringData({
                      itemType: '',
                      sort: '',
                      order: '',
                      manufacturer: [],
                      tags: [],
                      page: 1,
                      limit: 1750,
                  });
        } else if (e.target.name === 'sortPriceDesc') {
            e.target.checked
                ? setFilteringData({
                      ...filteringData,
                      sort: 'price',
                      order: 'desc',
                  })
                : setFilteringData({
                      itemType: '',
                      sort: '',
                      order: '',
                      manufacturer: [],
                      tags: [],
                      page: 1,
                      limit: 1750,
                  });
        } else if (e.target.name === 'sortAddedAsc') {
            e.target.checked
                ? setFilteringData({
                      ...filteringData,
                      sort: 'added',
                      order: 'asc',
                  })
                : setFilteringData({
                      itemType: '',
                      sort: '',
                      order: '',
                      manufacturer: [],
                      tags: [],
                      page: 1,
                      limit: 1750,
                  });
        } else if (e.target.name === 'sortAddedDesc') {
            e.target.checked
                ? setFilteringData({
                      ...filteringData,
                      sort: 'added',
                      order: 'desc',
                  })
                : setFilteringData({
                      itemType: '',
                      sort: '',
                      order: '',
                      manufacturer: [],
                      tags: [],
                      page: 1,
                      limit: 1750,
                  });
        } else if (e.target.name === 'itemType') {
            setFilteringData({
                ...filteringData,
                [e.target.name]: e.target.value,
            });
        } else if (e.target.name === 'manufacturer') {
            let manufacturerArr = [...filteringData.manufacturer];
            e.target.checked
                ? manufacturerArr.push(e.target.value)
                : (manufacturerArr = manufacturerArr.filter(
                      (item) => item !== e.target.value,
                  ));
            setFilteringData({
                ...filteringData,
                manufacturer: manufacturerArr,
            });
        } else if (e.target.name === 'tags') {
            let tagsArr = [...filteringData.tags];
            e.target.checked
                ? tagsArr.push(e.target.value)
                : (tagsArr = tagsArr.filter((item) => item !== e.target.value));
            setFilteringData({
                ...filteringData,
                tags: tagsArr,
            });
        }
    };

    const handleAddToBasket = (product: Item) => {
        dispatch(addToBasket({ quantity: 1, product }));
    };

    const handleCalculateTotalPrice = () => {
        if (basketItems.length > 0) {
            return basketItems
                .reduce((total, item) => item.product.price + total, 0)
                .toFixed(2);
        } else {
            return '0';
        }
    };

    useEffect(() => {
        dispatch(getCompanies());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getItems(filteringData));
    }, [dispatch, filteringData]);

    return (
        <div className="app">
            {/* Header */}
            <Header handleCalculateTotalPrice={handleCalculateTotalPrice} />

            {/* App Body */}
            <div className="app-body">
                {/* Sidebar */}
                <Sidebar
                    companies={companies}
                    items={items}
                    handleFilteringDataChange={handleFilteringDataChange}
                />

                {/* Feed */}
                <Feed
                    items={items}
                    handleFilteringDataChange={handleFilteringDataChange}
                    handlePaginationChange={handlePaginationChange}
                    handleAddToBasket={handleAddToBasket}
                />

                {/* Widgets */}
                <Basket
                    basketItems={basketItems}
                    handleAddToBasket={handleAddToBasket}
                    handleCalculateTotalPrice={handleCalculateTotalPrice}
                />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default App;
