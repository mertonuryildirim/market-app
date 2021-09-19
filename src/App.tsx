import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './app.css';
import Basket from './components/basket/Basket';
import Feed from './components/feed/Feed';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import BasketModal from './components/mobile/BasketModal';
import FilterModal from './components/mobile/FilterModal';
import Sidebar from './components/sidebar/Sidebar';
import { addToBasket } from './store/actions/basketActions';
import { getCompanies } from './store/actions/companyActions';
import { getItems } from './store/actions/itemActions';
import { AppState } from './store/reducers';
import { FilteringData, Item } from './types/item';

const App: React.FC = () => {
    const dispatch = useDispatch();
    //Basket Items state.
    const { basketItems } = useSelector((state: AppState) => state.basketItems);
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
    const [showBasketModal, setShowBasketModal] = useState(false);
    const [showFilterModal, setShowFilterModal] = useState(false);

    const handleOpenBasketModal = () => {
        setShowBasketModal(true);
    };

    const handleCloseBasketModal = () => {
        setShowBasketModal(false);
    };

    const handleOpenFilterModal = () => {
        setShowFilterModal(true);
    };

    const handleCloseFilterModal = () => {
        setShowFilterModal(false);
    };

    //Handle pagination, set page number for filteringData state
    const handlePaginationChange = (pageNumber: number) => {
        setFilteringData({
            ...filteringData,
            page: pageNumber,
        });
    };

    //TODO: Refactor the code
    // Update filtering data by name of sidebar form elements
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
                      limit: 16,
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
                      limit: 16,
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
                      limit: 16,
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
                      limit: 16,
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

    //Event Listener for closing modal at greater or equal 1002 pixel
    useEffect(() => {
        const handleCloseModals = () => {
            if (window.innerWidth >= 1002) {
                setShowBasketModal(false);
                setShowFilterModal(false);
            }
        };

        window.addEventListener('resize', handleCloseModals);
        return () => window.removeEventListener('resize', handleCloseModals);
    }, []);

    return (
        <div className="app">
            {/* Header */}
            <Header handleCalculateTotalPrice={handleCalculateTotalPrice} />

            {/* App Body */}
            <div className="app-body">
                {/* Sidebar */}
                <Sidebar
                    handleFilteringDataChange={handleFilteringDataChange}
                />

                {/* Filtering Button For Mobile Screens */}
                <button
                    onClick={handleOpenFilterModal}
                    className="offcanvas-mobile-button filter-button offcanvas-mobile-visibility-min"
                >
                    <div>
                        <img src="./filter.svg" alt="Filter Icon" />
                    </div>
                </button>

                {/* Filtering Modal For Mobile Screens */}
                <FilterModal
                    handleFilteringDataChange={handleFilteringDataChange}
                    showFilterModal={showFilterModal}
                    handleCloseFilterModal={handleCloseFilterModal}
                />

                {/* Feed */}
                <Feed
                    handleFilteringDataChange={handleFilteringDataChange}
                    handlePaginationChange={handlePaginationChange}
                    handleAddToBasket={handleAddToBasket}
                />

                {/* Filtering Button For Mobile Screens */}
                {basketItems.length > 0 && (
                    <button
                        onClick={handleOpenBasketModal}
                        className="offcanvas-mobile-button basket-button offcanvas-mobile-visibility-min"
                    >
                        <div>
                            <img src="./basket.svg" alt="Basket Icon" />
                        </div>
                    </button>
                )}

                {/* Basket Modal For Mobile Screens */}
                <BasketModal
                    handleAddToBasket={handleAddToBasket}
                    handleCalculateTotalPrice={handleCalculateTotalPrice}
                    showBasketModal={showBasketModal}
                    handleCloseBasketModal={handleCloseBasketModal}
                />

                {/* Basket */}
                <Basket
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
