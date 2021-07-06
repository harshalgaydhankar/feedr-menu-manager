import React from 'react';

const ItemPreview = ({item}) => {

    const getDietarySpan = (dietary, index) => {
        return (
            <span className="dietary" key={index}>{dietary}</span>
        );
    };
    return(
        <>
            <li className="item" key={item.id}>
                <h2>{item.name}</h2>
                <p>
                    {item.dietaries.map((dietary, index) => getDietarySpan(dietary, index))}
                </p>
                <button className="remove-item">x</button>
            </li>
        </>
    );
};

export default ItemPreview;