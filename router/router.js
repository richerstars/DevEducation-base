const url = require('url');
const universityController = require('../controllers/university_controller');
const userController = require('../controllers/user_controller');
const coursesController = require('../controllers/courses_controller');
const markController = require('../controllers/mark_controller');
const {PATH} = require('../constants/router_path');

const router = async (req, res, body) => {
    let result;
    const {method, url: reqUrl} = req;
    const {pathname, query} = url.parse(reqUrl, true);

    switch (true) {
        //1
        case (method === 'POST' && pathname === PATH.universities.value):
            result = await universityController.createUniversity(body);
            break;
        //2
        case (method === 'GET' && pathname === PATH.universities.value):
            result = await universityController.getUniversityById(query);
            break;
        //3
        case (method === 'GET' && pathname === PATH.universities.list):
            result = await universityController.getUniversityList(query);
            break;
        //4
        case (method === 'POST' && pathname === PATH.teacher.value):
            result = await userController.createTeacher(body);
            break;
        //5
        case (method === 'GET' && pathname === PATH.teacher.list):
            result = await userController.getTeacherById(query);
            break;
        //6
        case (method === 'POST' && pathname === PATH.course.value):
            result = await coursesController.createCourse(body);
            break;
        //7
        case (method === 'GET' && pathname === PATH.course.list):
            result = await coursesController.getCourses(query);
            break;
        //8
        case (method === 'DELETE' && pathname === PATH.course.value):
            result = await coursesController.deleteCourse(query);
            break;
        //9
        case (method === 'POST' && pathname === PATH.student.value):
            result = await userController.createStudent(body);
            break;
        //10
        case (method === 'DELETE' && pathname === PATH.student.value):
            result = await userController.deleteStudent(query);
            break;
        //11
        case (method === 'GET' && pathname === PATH.student.university.list):
            result = await userController.getStudentsByUniversity(query);
            break;
        //12
        case (method === 'GET' && pathname === PATH.student.course.list):
            result = await userController.getStudentsByCourse(query);
            break;
        //13
        case (method === 'GET' && pathname === PATH.student.course.rating):
            result = await markController.getRatingByCourse(query);
            break;
        //14
        case (method === 'POST' && pathname === PATH.course.student):
            result = await coursesController.addStudentToCourse(body);
            break;
        //15
        case (method === 'DELETE' && pathname === PATH.course.student):
            result = await coursesController.removeStudent(body);
            break;
        //16
        case (method === 'POST' && pathname === PATH.mark.value):
            result = await markController.createMark(body);
            break;
        //17 same as 10
        //18
        case (method === 'PUT' && pathname === PATH.student.value):
            result = await userController.editStudent(body);
            break;
        default:
            result = {status: 404, result: {message: 'Path isn`t found'}};
    }
    const {status} = result;
    ({result} = result);
    res.statusCode = status;
    return result;
};
module.exports = {router};
