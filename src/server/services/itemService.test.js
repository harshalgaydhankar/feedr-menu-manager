import itemService from './itemService';

const expectedItems = require('../items');

describe('Item Service', () => {
    let dietaries = new Map();

    beforeEach(() => {
        dietaries.set('ve', 6);
        dietaries.set('v', 4);
        dietaries.set('n!', 12);
    });

    it('returns list of all items', () => {
        const actualItems = itemService.getItems();
        expect(actualItems).toEqual(expectedItems);
    })

    it('returns list of all items who matches searchString', () => {
        const expectedItemsOfBroccoli = [
            {
                "id": 1001,
                "name": "Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens",
                "dietaries": ["v", "ve", "df", "gf", "n!"]
            }, {
                "id": 1004,
                "name": "Hake & Smoky Chickpeas, Herby Potatoes & Turmeric Satay Broccoli",
                "dietaries": ["df", "gf", "rsf", "n!"]
            }, {
                "id": 1007,
                "name": "Cuban Beef, Herby Potatoes & Turmeric Satay Broccoli",
                "dietaries": ["gf", "df", "n!"]
            }
        ];
        const actualItems = itemService.searchItems('BRoccoLi');
        expect(actualItems).toEqual(expectedItemsOfBroccoli);
    })
})