const items = require('../items');

const getItems = () => {
    return items;
};

const searchItems = (searchString) => {
    const  result = items.filter((item) => {
        return item.name.toLowerCase().includes(searchString.toLowerCase());
    });
    return result;
};
module.exports = {getItems, searchItems}