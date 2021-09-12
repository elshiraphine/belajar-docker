const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi sobat');
});

app.listen(9001, () => {
    console.log('Listening on port 9001');
});