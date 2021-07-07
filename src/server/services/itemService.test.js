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

})