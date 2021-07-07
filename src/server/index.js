const express = require('express');
const cors = require('cors');
const itemService = require('./services/itemService');


const app = express();

const port = process.env.PORT || 8080;
app.use(cors());

app.use(express.static('dist'));

app.get('/api/items', (req, res) => res.send({items: itemService.getItems()}));

app.get('/api/items/search/:searchString', (req, res) => {
    const {searchString} = req.params;
    res.send({items: itemService.searchItems(searchString)});
});

module.exports = app.listen(port, () => console.log(`Listening on port ${port}!`));
