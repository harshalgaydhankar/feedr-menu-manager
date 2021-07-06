import React from 'react';
import ItemPreview from "./ItemPreview";

const ItemPreviewPanel = ({selectedItems}) => {

    const getItemPreview = (item) => {
        return (
            <ItemPreview item={item}/>
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