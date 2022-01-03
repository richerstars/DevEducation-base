const pgClient = require('../database/connectDB');
const addMark = require('../repositories/mark.repositories')
const checkCreateMark = async (body) => {
    try {
        const {
                  student_id: studentId,
                  course_id: courseId,
                  university_id: universityId,
              } = body;

        const universityData = await pgClient.query(`SELECT * FROM universities WHERE id = ${universityId}`);
        if (!universityData.rowCount) return { status: 404, result: { message: 'University not found!' } };

        const pgQuery = `
            SELECT users.* 
            FROM students_courses 
            JOIN users ON students_courses.student_id = users.id 
            WHERE students_courses.student_id = ${studentId} AND students_courses.course_id = ${courseId}
        `;

        const attendingData = await pgClient.query(pgQuery);
        if (!attendingData.rowCount) return { status: 404, result: { message: 'No course attendance records found' } };
        const { university_id: userUniversity } = attendingData.rows[0];
        if (universityId !== userUniversity) return { status: 400, result: { message: 'This student not from this university' } };
        const { error: dbError, result } = await addMark.createDBMark(body);
        if (dbError) return { error: dbError };
        return { result };
    } catch (error) {
        return { error };
    }
};

module.exports = {
    checkCreateMark,
};
