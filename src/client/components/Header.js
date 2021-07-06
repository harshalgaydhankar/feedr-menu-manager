import React from 'react';

const Header = ({itemCount}) => {

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 menu-summary-left">
                        <span>{itemCount} items</span>
                    </div>
                    <div className="col-6 menu-summary-right">
                        6x <span className="dietary">ve</span>
                        4x <span className="dietary">v</span>
                        12x <span className="dietary">n!</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;