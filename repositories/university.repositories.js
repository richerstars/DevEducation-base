const pgClient = require('../database/connectDB');

const createUniversity = async (body) => {
    try {
        const {country, city, name, accreditation} = body;
        await pgClient.query(`
            INSERT INTO universities (country, city, name, accreditation)
            VALUES ('${country}', '${city}', '${name}', ${accreditation})`);
        return {result: {country, city, name, accreditation}};
    } catch (error) {
        return error;
    }
};
const getIDUniversityById = async (id) => {
    try {
        const result = await pgClient.query(`SELECT * FROM universities WHERE id = ${id}`);
      return {result: result.rows[0]};
    } catch (error) {
        return error;
    }
};
const getListUniversity = async (query) => {
    try {
        const {name, page, perPage} = query;
        let request = `SELECT * FROM universities`;
        if(name){
            request+=`WHERE name LIKE '%${name}%'`;
            request += `ORDER BY id OFFSET ${(page - 1) * perPage} LIMIT ${perPage};`;
        }
        const result = await pgClient.query(request);
        return {result: result.rows};
    } catch (error) {
        return error;
    }
};
module.exports = {
    createUniversity,
    getIDUniversityById,
    getListUniversity
}
