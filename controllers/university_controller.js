const universityRepositories = require('../repositories/university.repositories');
const validation = require('../validate/validate');

const createUniversity = async (body) => {
    const { error, value } = validation.validateUniversity.validate(body);
    if (error) return { status: 400, result: { message: error.message } };
    const {error: dbError, result} = await universityRepositories.createUniversity(value);
    if (dbError) return {status: 500, result: dbError};
    return {status: 201, result};

};
const getUniversityById = async (query) => {
    const { error, value } = validation.validateUniversityById.validate(query.id);
    if (error) return { status: 400, result: { message: error.message } };
    const {error: dbError, result} = await universityRepositories.getIDUniversityById(value);
    if (dbError) return {status: 500, result: dbError};
    return {status: 200, result};
};
const getUniversityList = async (query) => {
    const { error, value } = validation.validateListUniversity.validate(query);
    if (error) return { status: 400, result: { message: error.message } };
    const {error: dbError, result} = await universityRepositories.getListUniversity(value);
    if (dbError) return {status: 500, result: dbError};
    return {status: 200, result};
};
module.exports = {
    createUniversity,
    getUniversityById,
    getUniversityList
}
