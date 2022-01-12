const axios = require('axios');

async function getHistory() {
    try {
        const result = await axios.get('https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=eb770bb2&app_key=967417b625ae1d9da46cf7bb0db75ec5');
        return { result: { data: result, status: 201 } }
    } catch ( error ) {
        const throwNewError = { status: 400, data: error.message };
        return { error: throwNewError };
    }
}

module.exports = { getHistory };
