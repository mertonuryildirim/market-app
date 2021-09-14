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
    //Items state.
    //TODO: use missing state items
    //eslint-disable-next-line
    const { items, loadingItem, errorItem } = useSelector(
        (state: AppState) => state.items,
    );
    //Companies state.
    //TODO: use missing state items
    //eslint-disable-next-line
    const { companies, loadingCompany, errorCompany } = useSelector(
        (state: AppState) => state.companies,
    );
    //Basket Items state.
    //TODO: use missing state items
    //eslint-disable-next-line
    const { basketItems, loadingBasket, errorBasket } = useSelector(
        (state: AppState) => state.basketItems,
    );
    //Filtering data managed from one state. Sends to getItems action. Used for items api query string params
    const [filteringData, setFilteringData] = useState<FilteringData>({
        itemType: '',
        sort: '',
        order: '',
        manufacturer: [],
        tags: [],
        page: 1,
        limit: 16,
    });

    const handlePaginationChange = (pageNumber: number) => {
        setFilteringData({
            ...filteringData,
            page: pageNumber,
        });
    };

    // Update filtering data by name of sidebar form elements
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

    // Dispatch addToBasket action. Retrieves the product's quantity and product information
    const handleAddToBasket = (product: Item) => {
        dispatch(addToBasket({ quantity: 1, product }));
    };

    // Calculates the total amount of products added to the basket
    const handleCalculateTotalPrice = () => {
        if (basketItems.length > 0) {
            return basketItems
                .reduce(
                    (total, item) => item.product.price * item.quantity + total,
                    0,
                )
                .toFixed(2);
        } else {
            return '0';
        }
    };

    //Dispatch getCompanies action when component renders
    useEffect(() => {
        dispatch(getCompanies());
    }, [dispatch]);

    //Dispatch getItems action. Action retrieves filteringData state which uses for api query string params
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

                {/* Basket */}
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
