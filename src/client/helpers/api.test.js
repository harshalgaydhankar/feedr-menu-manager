let fetch = require('node-fetch');
const api = require("./api");

jest.mock('node-fetch', () => {
    return jest.fn();
});


describe('Api tests', () => {
    it('returns list of all items', () => {
        fetch.mockImplementationOnce(() =>
            Promise.resolve({
                json: () => Promise.resolve('123'),
            }),
        );
        api.Items.get((data) => {
            expect(data).toBe('123');
        });
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('http://localhost:8080/api/items');
    })
})