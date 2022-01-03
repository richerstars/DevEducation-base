const pgClient = require('../database/connectDB');

const createCourses = async (body) => {
    try {
        const {name, user_id: userId, university_id: universityId,} = body;
        await pgClient.query(`INSERT INTO courses(name, user_id, university_id)
                              VALUES ('${name}', ${userId}, ${universityId})`);
        return {result: {name, userId, universityId}};
    } catch (err) {
        console.error(err);
    }
};
const getCoursesByUniversityId = async (query) => {
    try {
        const {page, perPage, name,university_id } = query;
        let request = ` SELECT * FROM courses WHERE university_id = ${university_id} `;

        if (name) {
            request += `AND course_name ILIKE '%${name}%'`;
            request += `ORDER BY id OFFSET ${(page - 1) * perPage} LIMIT ${perPage};`;
        }
        const result = await pgClient.query(request);
        return {result: result.rows};
    } catch (error) {
        return {error};
    }
};
const deleteDBCourse = async (id) => {
    try {
        await pgClient.query(`DELETE FROM courses WHERE id = ${id}`);
        return { result: "Deleted" };
    } catch (error) {
        return { error };
    }
};
const linkDBStudent = async (body) => {
    try {
        const {student_id: studentId,course_id: courseId} = body;
        const pgQuery = `
            INSERT INTO students_courses (student_id, course_id)
            VALUES (${studentId}, ${courseId})
            RETURNING *;
        `;
        const result = await pgClient.query(pgQuery);
        return { result: result.rows[0] };
    } catch (error) {
        return { error };
    }
};
const deleteDBStudent = async (body) => {
    try {
        const {student_id: studentId, course_id: courseId} = body;
        await pgClient.query(` DELETE FROM students_courses WHERE student_id = ${studentId} AND course_id = ${courseId};`);
        await pgClient.query(`DELETE FROM marks WHERE student_id = ${studentId} AND course_id = ${courseId}`);
        return { result: { message: 'Student deleted from course successfully!' } };
    } catch (error) {
        return { error };
    }
};
module.exports = {
    createCourses,
    getCoursesByUniversityId,
    deleteDBCourse,
    linkDBStudent,
    deleteDBStudent
}
