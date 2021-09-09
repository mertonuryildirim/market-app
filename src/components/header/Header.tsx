import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-center">
                <img src="./market-logo.svg" alt="Market Icon"></img>
            </div>
            <div className="header-right">
                <span>₺ 45.97</span>
            </div>
        </div>
    );
};

export default Header;
