import React, {useState} from 'react';
import './app.css';
import Header from "./Header";
import ItemNavigationPanel from "./ItemNavigationPanel";
import ItemPreviewPanel from "./ItemPreviewPanel";

const App = () => {

    const [selectedItems, setSelectedItems] = useState([]);

    const removeSelectedItem = (id) => {
        const newSelectedItems = selectedItems.filter((item) => item.id != id);
        setSelectedItems(newSelectedItems);
    };

    const addToSelectedItems = (item) => {
        const newSelectedItems = [...selectedItems, item];
        setSelectedItems(newSelectedItems);
    };

    return (
        <div className="wrapper">
            <div className="menu-summary" data-testid="header">
                <Header itemCount={selectedItems.length}/>
            </div>
            <div className="container menu-builder">
                <div className="row">
                    <div className="col-4" data-testid="itemNavigationPanel">
                        <ItemNavigationPanel addToSelectedItems={addToSelectedItems}/>
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