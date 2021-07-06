import React, {useEffect, useState} from 'react';
import api from "../helpers/api";

const ItemNavigationPanel = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (items.length === 0)
            fetchItems();
    }, []);

    const fetchItems = () => {
        api.Items.get().then(data => {
            setItems(data.items);
        });
    };

    const getDietarySpan =(dietary) => {
        return (
            <span className="dietary">{dietary}</span>
        );
    };

    const getListItem = item => {
        return (
            <li className="item" key={item.id}>
                <h2>{item.name}</h2>
                <p>
                    {item.dietaries.map(dietary => getDietarySpan(dietary))}
                </p>
            </li>
        );
    };

    const getNavigationList = () => {
        return <ul>{items.map(item => getListItem(item))}</ul>;
    };

    return (
        <>
            <div className="filters">
                <input className="form-control" placeholder="Name"/>
            </div>
            {getNavigationList()}
        </>
    );
};

export default ItemNavigationPanel;