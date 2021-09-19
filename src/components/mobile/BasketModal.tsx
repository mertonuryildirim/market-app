import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import { Item } from '../../types/item';
import BasketItems from '../basket/BasketItems';

interface BasketModalProps {
    handleAddToBasket: (product: Item) => void;
    handleCalculateTotalPrice: () => void;
    showBasketModal: boolean;
    handleCloseBasketModal: () => void;
}

const BasketModal: React.FC<BasketModalProps> = ({
    handleAddToBasket,
    handleCalculateTotalPrice,
    showBasketModal,
    handleCloseBasketModal,
}) => {
    const { basketItems } = useSelector((state: AppState) => state.basketItems);

    return (
        <div>
            {showBasketModal && (
                <div
                    className={`modal offcanvas-mobile-visibility-min ${
                        showBasketModal ? 'modal-display' : ''
                    }`}
                >
                    <div className="modal-content">
                        <span
                            onClick={handleCloseBasketModal}
                            className="close"
                        >
                            &times;
                        </span>
                        {/* List basket items when basketItems length greater than zero. Otherwise show empty basket message */}
                        {basketItems.length > 0 ? (
                            basketItems.map((product) => {
                                return (
                                    <Fragment key={product.product.slug}>
                                        {/* Every basket item component. Containes basket item information & addToCart / removeFromCart Actions */}
                                        <BasketItems
                                            product={product}
                                            handleAddToBasket={
                                                handleAddToBasket
                                            }
                                        />
                                    </Fragment>
                                );
                            })
                        ) : (
                            <>There are no items in your basket.!</>
                        )}

                        <div className="basket-total-price">
                            ₺ {handleCalculateTotalPrice()}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BasketModal;
