const pgClient = require('../database/connectDB');

const getDBRatingByCourse = async (query) => {
    try {
        const {course_id, limit} = query;
        let result = await pgClient.query(` SELECT student_id, avg(mark) AS rating
                          FROM marks
                          WHERE course_id = ${course_id}
                          GROUP BY student_id LIMIT ${limit}`);
        return {result: result};
    } catch (error) {
        return {error};
    }
};
const createDBMark = async (body) => {
    try {
        const {mark, student_id: studentId, course_id: courseId, university_id: universityId} = body;

        const pgQuery = `
            INSERT INTO marks (mark, student_id, course_id, university_id)
            VALUES (${mark}, ${studentId}, ${courseId}, ${universityId})
            RETURNING *;
        `;
        const result = await pgClient.query(pgQuery);
        return { result: result.rows[0] };
    } catch (error) {
        return { error };
    }
};
module.exports = {
    getDBRatingByCourse,
    createDBMark
}
