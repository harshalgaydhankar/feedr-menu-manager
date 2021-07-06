import React from 'react';

const ItemPreviewPanel = ({selectedItems}) => {

    const getDietarySpan = (dietary, index) => {
        return (
            <span className="dietary" key={index}>{dietary}</span>
        );
    };

    const getItemPreview = (item) => {
        return (
            <li className="item" key={item.id}>
                <h2>{item.name}</h2>
                <p>
                    {item.dietaries.map((dietary, index) => getDietarySpan(dietary, index))}
                </p>
                <button className="remove-item">x</button>
            </li>
        )
    };

    const renderPreviewPanel = () =>{
        return <ul>{selectedItems.map(item => getItemPreview(item))}</ul>;
    }

    return (
        <>
            <h2>Menu preview</h2>
            <ul className="menu-preview">
                {renderPreviewPanel()}
            </ul>
        </>
    );
};

export default ItemPreviewPanel;