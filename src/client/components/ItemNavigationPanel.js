import React, {useEffect, useState} from 'react';
import api from "../helpers/api";

const ItemNavigationPanel = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        if(items.length === 0)
            fetchItems();
    }, []);

    const fetchItems = () =>{
        api.Items.get().then(items => {
            setItems(items);
        });
    };

    return(
        <>
            <div className="filters">
                <input className="form-control" placeholder="Name" />
            </div>
            <ul className="item-picker">
                <li className="item">
                    <h2>Dummy item</h2>
                    <p>
                        <span className="dietary">ve</span>
                        <span className="dietary">v</span>
                        <span className="dietary">n!</span>
                    </p>
                </li>
                <li className="item">
                    <h2>Dummy item</h2>
                    <p>
                        <span className="dietary">ve</span>
                        <span className="dietary">v</span>
                        <span className="dietary">n!</span>
                    </p>
                </li>
                <li className="item">
                    <h2>Dummy item</h2>
                    <p>
                        <span className="dietary">ve</span>
                        <span className="dietary">v</span>
                        <span className="dietary">n!</span>
                    </p>
                </li>
                <li className="item">
                    <h2>Dummy item</h2>
                    <p>
                        <span className="dietary">ve</span>
                        <span className="dietary">v</span>
                        <span className="dietary">n!</span>
                    </p>
                </li>
                <li className="item">
                    <h2>Dummy item</h2>
                    <p>
                        <span className="dietary">ve</span>
                        <span className="dietary">v</span>
                        <span className="dietary">n!</span>
                    </p>
                </li>
                <li className="item">
                    <h2>Dummy item</h2>
                    <p>
                        <span className="dietary">ve</span>
                        <span className="dietary">v</span>
                        <span className="dietary">n!</span>
                    </p>
                </li>
                <li className="item">
                    <h2>Dummy item</h2>
                    <p>
                        <span className="dietary">ve</span>
                        <span className="dietary">v</span>
                        <span className="dietary">n!</span>
                    </p>
                </li>
            </ul>
        </>
    );
};

export default ItemNavigationPanel;