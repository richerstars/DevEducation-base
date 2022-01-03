const markRepositories = require('../repositories/mark.repositories');
const markService = require('../service/mark_service');
const validation = require('../validate/validate');
const getRatingByCourse = async (query) => {
    const { error, value } = validation.validateRating.validate(query);
    if (error) return { status: 400, result: { message: error.message } };
    const { error: dbError, result } = await markRepositories.getDBRatingByCourse(value);
    if (dbError) return { status: 500, result: dbError };
    return { status: 200, result };
};
const createMark = async (body) => {
    const { error, value } = validation.validateMark.validate(body);
    if (error) return { status: 400, result: { message: error.message } };
    const { status, error: dbError, result } = await markService.checkCreateMark(value);
    if (dbError) return { status: 500, result: dbError };
    return { status: status || 201, result };
};
module.exports = {
    getRatingByCourse,
    createMark,
};
