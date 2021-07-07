import React, {useEffect, useState} from 'react';
import './app.css';
import Header from "./Header";
import ItemNavigationPanel from "./ItemNavigationPanel";
import ItemPreviewPanel from "./ItemPreviewPanel";
import updateDietaries from "../helpers/dietaries";
import api from "../helpers/api";
import ItemFilterPanel from "./ItemFillterPanel";

const App = () => {

    const [items, setItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [dietaries, setDietaries] = useState(new Map());

    useEffect(() => {
        if (items.length === 0)
            fetchItems();
    }, []);

    const fetchItems = () => {
        api.Items.get().then(data => {
            setItems(data.items);
        });
    };

    const removeSelectedItem = (id) => {
        const removedItem = selectedItems.find(item => item.id === id);
        const newSelectedItems = selectedItems.filter((item) => item.id != id);
        setSelectedItems(newSelectedItems);
        setDietaries(updateDietaries(dietaries, removedItem.dietaries, -1));
    };

    const addToSelectedItems = (item) => {
        const newSelectedItems = [...selectedItems, item];
        setSelectedItems(newSelectedItems);
        setDietaries(updateDietaries(dietaries, item.dietaries, 1));
    };


    return (
        <div className="wrapper">
            <div className="menu-summary" data-testid="header">
                <Header itemCount={selectedItems.length} dietaries={dietaries}/>
            </div>
            <div className="container menu-builder">
                <div className="row">
                    <div className="col-4" data-testid="itemNavigationPanel">
                        <div className="filters" data-testid="itemFilterPanel">
                            <ItemFilterPanel/>
                        </div>
                        <ItemNavigationPanel addToSelectedItems={addToSelectedItems} items={items}/>
                    </div>
                    <div className="col-8" data-testid="itemPreviewPanel">
                        <ItemPreviewPanel selectedItems={selectedItems} removeItem={removeSelectedItem}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;