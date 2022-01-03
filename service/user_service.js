const pgClient = require('../database/connectDB');
const editStudent = require('../repositories/user.repositories')
const checkEditStudent = async (body) => {
    try {
        const { id } = body;

        const userData = await pgClient.query(`SELECT * FROM users WHERE id = ${id}`);
        if (!userData.rowCount) return { status: 404, result: { message: 'User not found!' } };
        const { user_role: userRole } = userData.rows[0];
        if (userRole !== 'student') return { status: 400, result: { message: 'This user is not student!' } };

        const { error: dbError, result } = await editStudent.editStudent(body);
        if (dbError) return { status: 500, result: dbError };

        return { result };
    } catch (error) {
        return { error };
    }
};
module.exports = {
    checkEditStudent,
};
