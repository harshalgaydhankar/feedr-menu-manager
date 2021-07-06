import React from 'react';
import './app.css';
import Header from "./Header";
import ItemNavigationPanel from "./ItemNavigationPanel";
import ItemPreviewPanel from "./ItemPreviewPanel";

const App = () => (
    <div className="wrapper">
        <div className="menu-summary" data-testid="header">
            <Header/>
        </div>
        <div className="container menu-builder">
            <div className="row">
                <div className="col-4" data-testid="itemNavigationPanel">
                    <ItemNavigationPanel/>
                </div>
                <div className="col-8" data-testid="itemPreviewPanel">
                    <ItemPreviewPanel selectedItems={[]}/>
                </div>
            </div>
        </div>
    </div>
);

export default App;