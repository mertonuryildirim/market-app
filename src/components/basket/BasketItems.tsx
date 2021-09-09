import React from 'react';

const BasketItems = () => {
    return (
        <div className="basket-items">
            <div className="basket-items-info">
                <p>Example Product</p>
                <p>₺ 14.99</p>
            </div>

            <div className="basket-items-quantity">
                <button>- </button>
                <div>
                    <p>1</p>
                </div>
                <button> +</button>
            </div>
        </div>
    );
};

export default BasketItems;
