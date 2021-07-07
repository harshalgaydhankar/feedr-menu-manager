let fetch = require('node-fetch');
const api = require("./api");

jest.mock('node-fetch', () => {
    return jest.fn();
});


describe('Api tests', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('returns list of all items', () => {
        const expectedItems = [
            {
                id: 10018,
                name: 'Dark Chocolate Brownie',
                dietaries: ['v', 'gf'],
            },
            {
                id: 10019,
                name: 'Mangajo Pomegranate',
                dietaries: ['ve', 'df', 'gf'],
            }
        ]
        fetch.mockImplementationOnce(() =>
            Promise.resolve({
                json: () => Promise.resolve({items: expectedItems}),
            }),
        );
        api.Items.get().then(data => {
            expect(data).toEqual({items:expectedItems});
        });
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('http://localhost:8080/api/items');
    })

    it('returns list of all items which matches with ', () => {
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
        ]
        fetch.mockImplementationOnce(() =>
            Promise.resolve({
                json: () => Promise.resolve({items :expectedItemsOfBroccoli}),
            }),
        );
        api.Items.search('BRoccoLi').then(data => {
            expect(data).toEqual({items:expectedItemsOfBroccoli});
        });
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('http://localhost:8080/api/items/search/BRoccoLi');
    })
})