import React from 'react';
import './Header.css';

interface HeaderProps {
    handleCalculateTotalPrice: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleCalculateTotalPrice }) => {
    return (
        <div className="header">
            <div className="header-center">
                <img src="./market-logo.svg" alt="Market Icon"></img>
            </div>
            <div className="header-right">
                <div>
                    <img src="./basket.svg" alt="Basket Icon" />
                    {/* Header basket total amount */}
                    <span>₺ {handleCalculateTotalPrice()}</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
