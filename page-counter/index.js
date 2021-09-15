const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('counter', 0);

app.get('/', (req, res) => {
    process.exit(0);
    client.get('counter', (err, counter) =>{
        res.send('Page Visitor Counter : ' + counter);
        client.set('counter', parseInt(counter) + 1);
    });
});

app.listen(4001, () =>{
    console.log('Listening on port 4001');
});