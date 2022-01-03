const coursesRepositories = require('../repositories/courses.repositories');
const courseService = require('../service/course_service');
const validation = require('../validate/validate');
const createCourse = async (body) => {
    const { error, value } = validation.validateCourse.validate(body);
    if (error) return { status: 400, result: { message: error.message } };
    const { status, error: dbError, result } = await coursesRepositories.createCourses(value);
    if (dbError) return { status: 500, result: dbError };
    return { status: status || 201, result };
};
const getCourses = async (query) => {
    const { error, value } = validation.validateCourseByIdUni.validate(query);
    if (error) return { status: 400, result: { message: error.message } };
    const { error: dbError, result } = await coursesRepositories.getCoursesByUniversityId(value);
    if (dbError) return { status: 500, result: dbError };
    return { status: 200, result };
};
const deleteCourse = async (query) => {
    const { error, value } = validation.validateDeleteCourse.validate(query.id);
    if (error) return { status: 400, result: { message: error.message } };
    const { error: dbError, result } = await coursesRepositories.deleteDBCourse(value);
    if (dbError) return { status: 500, result: dbError };
    return { status: 200, result };
};
const addStudentToCourse = async (body) => {
    const { error, value } = validation.validateStudentByCourse.validate(body);
    if (error) return { status: 400, result: { message: error.message } };
    const { status, error: dbError, result } = await courseService.addStudentToCourseCheck(value);
    if (dbError) return { status: 500, result: dbError };

    return { status: status || 201, result };
};
const removeStudent = async (body) => {
    const { error, value } = validation.validateRemoveStudent.validate(body);
    if (error) return { status: 400, result: { message: error.message } };
    const { error: dbError, result } = await coursesRepositories.deleteDBStudent(value);
    if (dbError) return { status: 500, result: dbError };

    return { status: 200, result };
};
module.exports = {
    createCourse,
    getCourses,
    deleteCourse,
    addStudentToCourse,
    removeStudent
};
