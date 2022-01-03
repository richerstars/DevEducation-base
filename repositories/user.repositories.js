const pgClient = require('../database/connectDB');

const createTeacher = async (body) => {
    try {
        const {role, first_name, last_name, age, university_id} = body;
        await pgClient.query(`INSERT INTO users (role, first_name, last_name, age, university_id)
                              VALUES ('${role}', '${first_name}', '${last_name}', ${age}, ${university_id})`);
        return {result: {role, first_name, last_name, age, university_id}};
    } catch (error) {
        return error;
    }
};
const getIDTeacherById = async (query) => {
    try {
        const {page, perPage, name, university_id} = query;
        let request = `SELECT *
                       FROM users
                       WHERE role = 'teacher'
                         AND university_id = ${university_id}`;
        if (name) {
            request += `AND first_name LIKE '%${name}%'`;
            request += `ORDER BY id OFFSET ${(page - 1) * perPage} LIMIT ${perPage};`;
        }
        const result = await pgClient.query(request);
        return {result: result.rows};
    } catch (error) {
        return error;
    }
};
const createUser = async (body) => {
    try {
        const {role, first_name, last_name, age, university_id} = body;
        await pgClient.query(`INSERT INTO users (role, first_name, last_name, age, university_id)
                              VALUES ('${role}', '${first_name}', '${last_name}', ${age}, ${university_id})`);
        return {result: {role, first_name, last_name, age, university_id}};
    } catch (error) {
        return {error};
    }
};
const deleteStudentById = async (id) => {
    try {
        await pgClient.query(`DELETE
                              FROM users
                              WHERE id = ${id}
                                AND role = 'student'`);
        return {result: "Deleted"};
    } catch (err) {
        return {err};
    }
};
const getStudentsByUniversity = async (query) => {
    try {
        const {page, perPage, name, university_id} = query;
        let request = `SELECT *
                       FROM users
                       WHERE role = 'student'
                         AND university_id = ${university_id}`;
        if (name) {
            request += `AND first_name LIKE '%${name}%'`;
            request += `ORDER BY id OFFSET ${(page - 1) * perPage} LIMIT ${perPage};`;
        }
        const result = await pgClient.query(request);
        return {result: result.rows};
    } catch (error) {
        return error;
    }
};
const getDBStudentsByCourse = async (query) => {
    try {
        const {page, perPage, name, course_id} = query;
        let request = `SELECT *
                       FROM students_courses
                                JOIN users ON students_courses.student_id = users.id
                       WHERE course_id = ${course_id}`;
        if (name) {
            request += `AND first_name LIKE '%${name}%'`;
            request += `OFFSET ${(page - 1) * perPage} LIMIT ${perPage}`;
        }
        const result = await pgClient.query(request);
        return {result: result.rows};
    } catch (error) {
        return error;
    }
};
const editStudent = async (body) => {
    try {
        const {id, first_name: firstName, last_name: lastName, age} = body;
        let pgQuery = `UPDATE users SET`;
        const options = [];
        if (firstName) options.push(`first_name = '${firstName}'`);
        if (lastName) options.push(`last_name = '${lastName}'`);
        if (age) options.push(`age = ${age}`);
        pgQuery += options.join(',');
        pgQuery += `WHERE id = ${id} RETURNING *`;
        const result = await pgClient.query(pgQuery);
        return {result: result.rows[0]};
    } catch (error) {
        return {error};
    }
};
module.exports = {
    createTeacher,
    getIDTeacherById,
    createUser,
    deleteStudentById,
    getStudentsByUniversity,
    getDBStudentsByCourse,
    editStudent
}
