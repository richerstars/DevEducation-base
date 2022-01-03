const {Client} = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: process.env.password,
})
client.connect()
    .then(() => console.log('DB connected!'))
    .catch((error) => console.log('Error to connect DB!', error.message));

module.exports = client;