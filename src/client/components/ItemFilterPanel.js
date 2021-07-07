import React from 'react';

const ItemFilterPanel = ({searchItems}) => {

    const handleChange = (e) => {
        searchItems(e.target.value);
    }

    return (
        <>
            <input className="form-control" data-testid="searchStringInput" placeholder="Name" onChange={(e) => {
                handleChange(e)
            }}/>
        </>
    );
};

export default ItemFilterPanel;