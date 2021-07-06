import React from 'react';

const Header = ({itemCount, dietaries}) => {

    const getDietarySpan = (key,value) => {
        return (
            <><b>{value}x</b> <span className="dietary" key={key}>{key}</span></>
        );
    };

    const renderDietaries = () => {
        const dietariesView = [];
        dietaries.forEach((value, key) => {
            if(value > 0)
                dietariesView.push(getDietarySpan(key, value));
        });
        return dietariesView;
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 menu-summary-left">
                        <span>{itemCount} items</span>
                    </div>
                    <div className="col-6 menu-summary-right">
                        {renderDietaries()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;