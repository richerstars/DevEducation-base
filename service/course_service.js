const pgClient = require('../database/connectDB');
const addStudentToCourseCheckDB = require('../repositories/courses.repositories')
const addStudentToCourseCheck = async (body) => {
    try {
        const {
                  student_id: studentId,
                  course_id: courseId,
              } = body;
        const userData = await pgClient.query(`SELECT * FROM users WHERE id = ${studentId}`);
        if (!userData.rowCount) return { status: 404, result: { message: 'User not found!' } };
        const { user_role: userDBRole, university_id: userUniversityDBId } = userData.rows[0] || {};
        if (userDBRole !== 'student') return { status: 400, result: { message: 'This user is not a student!' } };
        const courseData = await pgClient.query(`SELECT * FROM courses WHERE id = ${courseId}`);
        if (!courseData.rowCount) return { status: 404, result: { message: 'Course not found!' } };
        const { university_id: courseUniversityId } = courseData.rows[0] || {};
        if (userUniversityDBId !== courseUniversityId) return { status: 400, result: { message: 'This student not from this university' } };
        const { error: dbError, result } = await addStudentToCourseCheckDB.linkDBStudent(body);
        if (dbError) return { error: dbError };
        return { result };
    } catch (error) {
        return { error };
    }
};

module.exports = {
    addStudentToCourseCheck,
};
