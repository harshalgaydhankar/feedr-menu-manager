import React, {useEffect, useState} from 'react';
import api from "../helpers/api";

const ItemNavigationPanel = ({addToSelectedItems, items}) => {
    // const [items, setItems] = useState([]);
    //
    // useEffect(() => {
    //     if (items.length === 0)
    //         fetchItems();
    // }, []);
    //
    // const fetchItems = () => {
    //     api.Items.get().then(data => {
    //         setItems(data.items);
    //     });
    // };

    const getDietarySpan = (dietary, index) => {
        return (
            <span className="dietary" key={index}>{dietary}</span>
        );
    };

    const getListItem = item => {
        return (
            <a key={item.id} href="#" onClick={ () => addToSelectedItems(item)}>
                <li className="item" key={item.id}>
                    <h2>{item.name}</h2>
                    <p>
                        {item.dietaries.map((dietary, index) => getDietarySpan(dietary, index))}
                    </p>
                </li>
            </a>
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