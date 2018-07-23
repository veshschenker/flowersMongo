const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const dba = require('./mongoAcess.js');

app.listen(3000, () => {
    console.log('listening at port 3000');
})
