import React from 'react';
import ItemPreview from "./ItemPreview";

const ItemPreviewPanel = ({selectedItems, removeItem}) => {


    const getItemPreview = (item, index) => {
        return (
            <ItemPreview item={item} index={index} closePreview={ (index) => removeItem(index) }/>
        )
    };

    const renderPreviewPanel = () =>{
        return <ul>{selectedItems.map((item, index) => getItemPreview(item,index))}</ul>;
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