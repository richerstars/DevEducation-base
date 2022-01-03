const userRepositories = require('../repositories/user.repositories');
const userService = require('../service/user_service');
const validation = require('../validate/validate');
const createTeacher = async (body) => {
    const { error, value } = validation.validateTeacher.validate(body);
    if (error) return { status: 400, result: { message: error.message } };
    const {error: dbError, result} = await userRepositories.createTeacher(value);
    if (dbError) return {status: 500, result: dbError};
    return {status: 201, result};

};
const getTeacherById = async (query) => {
    const { error, value } = validation.validateListTeacher.validate(query);
    if (error) return { status: 400, result: { message: error.message } };
    const {error: dbError, result} = await userRepositories.getIDTeacherById(value);
    if (dbError) return {status: 500, result: dbError};
    return {status: 200, result};
};
const createStudent = async (body) => {
    const { error, value } = validation.validateStudent.validate(body);
    if (error) return { status: 400, result: { message: error.message } };
    const {status, error: dbError, result} = await userRepositories.createUser(value);
    if (dbError) return {status: 500, result: dbError};
    return {status: status || 201, result};
};
const deleteStudent = async (id) => {
    const { error, value } = validation.validateDeleteStudent.validate(id);
    if (error) return { status: 400, result: { message: error.message } };
    const {error: dbError, result} = await userRepositories.deleteStudentById(value);
    if (dbError) return {status: 500, result: dbError};
    return {status: 200, result};

};
const getStudentsByUniversity = async (query) => {
    const { error, value } = validation.validateStudentsByUni.validate(query);
    if (error) return { status: 400, result: { message: error.message }};
    const { error: dbError, result } = await userRepositories.getStudentsByUniversity(value);
    if (dbError) return { status: 500, result: dbError };
    return { status: 200, result };
};
const getStudentsByCourse = async (query) => {
    const { error, value } = validation.validateStudentsByCourse.validate(query);
    if (error) return { status: 400, result: { message: error.message } };
    const { error: dbError, result } = await userRepositories.getDBStudentsByCourse(value);
    if (dbError) return { status: 500, result: dbError };
    return { status: 200, result };
};
const editStudent= async (body) => {
    const { error, value } = validation.validateEditStudent.validate(body);
    if (error) return { status: 400, result: { message: error.message } };
    const { status, error: dbError, result } = await userService.checkEditStudent(value);
    if (dbError) return { status: 500, result: dbError };

    return { status: status || 201, result };
};
module.exports = {
    createTeacher,
    getTeacherById,
    createStudent,
    deleteStudent,
    getStudentsByUniversity,
    getStudentsByCourse,
    editStudent
}
