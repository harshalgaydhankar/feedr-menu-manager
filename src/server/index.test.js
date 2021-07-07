
const request = require('supertest');
const itemService = require('./services/itemService');


jest.mock('./services/itemService', () => {
    return {
        getItems: jest.fn()
    };
});

describe('Get Items API Test', () => {

    let server;

    beforeEach(function() {
        server = require('./index');
    });

    afterEach(async function() {
        await server.close();
    });

    it('should run on correct port', async () => {
        const port = server.address().port;
        expect(port).toBe(8080);
    });

    it('should return list of all items', async () => {
        let items = [
            {
                id: 1007,
                name: 'Cuban Beef, Herby Potatoes & Turmeric Satay Broccoli',
                dietaries: ['gf', 'df', 'n!'],
            },
            {
                id: 1008,
                name: 'Thai Chicken, Brown Rice & Quinoa & Turmeric Satay Broccolli',
                dietaries: ['gf', 'df', 'rsf', 'n!'],
            },
        ];
        itemService.getItems.mockReturnValueOnce(items);
        const response =  await request(server).get('/api/items');
        expect(response.text).toEqual(JSON.stringify({ items }));
    });

});

