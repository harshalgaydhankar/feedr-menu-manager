const SERVICE_BASE_URL = process.env.service_base_url || 'http://localhost:8080';
const fetch = require('node-fetch');

const api = {
    Items: {
        get: () => {
            const endPoint = `${SERVICE_BASE_URL}/api/items`;
            return fetch(endPoint)
                .then(res => res.json());
        },
    },
};

module.exports = api;

