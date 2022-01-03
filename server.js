const http = require('http');
require('dotenv').config();
require('./database/connectDB');
const {router} = require('./router/router')
const {HOSTNAME , PORT} = require('./constants/constants')

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Content-Type', 'application/json, text/plain; charset=utf-8;');
    res.setHeader('Access-Control-Max-Age', '-1');

    const bodyBuffer = [];
    req.on('data', (data) => {
        bodyBuffer.push(data);
    });

    req.on('end', async () => {
        const body = bodyBuffer.length === 0 ? null : JSON.parse(bodyBuffer);
        const result = await router(req, res, body);
        res.end(JSON.stringify(result));
    });

    req.on('error', (error) => {
        res.statusCode = 500;
        res.end(JSON.stringify({message: error.message}));
    });
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server - http://${HOSTNAME}:${PORT}/`);
});
