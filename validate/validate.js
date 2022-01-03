const Joi = require('joi');

const validateUniversity = Joi.object({
    country: Joi.string()
        .min(2)
        .max(30)
        .required(),
    city: Joi.string()
        .min(2)
        .max(30)
        .required(),
    name: Joi.string()
        .min(2)
        .max(30)
        .required(),
    accreditation: Joi.number()
        .min(0)
        .max(5)
        .required(),
});
const validateUniversityById = Joi.number()
    .positive()
    .integer()
    .min(1)
    .required();
const validateListUniversity = Joi.object({
    page: Joi.number()
        .positive()
        .integer()
        .min(1)
        .default(1),
    perPage: Joi.number()
        .positive()
        .integer()
        .min(1)
        .default(10),
    name: Joi.string()
        .min(2)
        .max(30)
        .default(''),
});
const validateTeacher = Joi.object({
    first_name: Joi.string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),
    last_name: Joi.string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),
    age: Joi.number()
        .positive()
        .integer()
        .max(100)
        .required(),
    role: Joi.string()
        .valid('teacher')
        .required(),
    university_id: Joi.number()
        .positive()
        .integer()
        .required(),
});
const validateListTeacher = Joi.object({
    university_id: Joi.number()
        .positive()
        .integer()
        .required(),
    page: Joi.number()
        .positive()
        .integer()
        .min(1)
        .default(1),
    perPage: Joi.number()
        .positive()
        .integer()
        .min(1)
        .default(10),
    name: Joi.string()
        .min(2)
        .max(30)
        .default(''),
});
const validateCourse = Joi.object({
    name: Joi.string()
        .min(2)
        .max(30)
        .required(),
    user_id: Joi.number()
        .positive()
        .integer()
        .required(),
    university_id: Joi.number()
        .positive()
        .integer()
        .required(),
});
const validateCourseByIdUni = Joi.object({
    university_id: Joi.number()
        .positive()
        .integer()
        .required(),
    page: Joi.number()
        .positive()
        .integer()
        .min(1)
        .default(1),
    perPage: Joi.number()
        .positive()
        .integer()
        .min(1)
        .default(5),
    name: Joi.string()
        .min(2)
        .default(''),
});
const validateDeleteCourse = Joi.number()
    .positive()
    .integer()
    .min(1)
    .required();
const validateStudent = Joi.object({
    first_name: Joi.string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),
    last_name: Joi.string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),
    age: Joi.number()
        .positive()
        .integer()
        .required(),
    role: Joi.string()
        .valid('student')
        .required(),
    university_id: Joi.number()
        .positive()
        .integer()
        .required(),
});
const validateDeleteStudent = Joi.object({
    id: Joi.number()
        .positive()
        .integer()
        .required(),
});
const validateStudentsByUni = Joi.object({
    university_id: Joi.number()
        .positive()
        .integer()
        .required(),
    page: Joi.number()
        .positive()
        .integer()
        .min(1)
        .default(1),
    perPage: Joi.number()
        .positive()
        .integer()
        .min(1)
        .default(10),
    name: Joi.string()
        .min(2)
        .default(''),
});
const validateStudentsByCourse = Joi.object({
    course_id: Joi.number()
        .positive()
        .integer()
        .required(),
    page: Joi.number()
        .positive()
        .integer()
        .default(1),
    perPage: Joi.number()
        .positive()
        .integer()
        .min(1)
        .default(10),
    name: Joi.string()
        .min(2)
        .default(''),
});
const validateRating = Joi.object({
    course_id: Joi.number()
        .positive()
        .integer()
        .required(),
    limit: Joi.number()
        .integer()
        .positive()
        .default(10),
});
const validateStudentByCourse = Joi.object({
    student_id: Joi.number()
        .positive()
        .integer()
        .required(),
    course_id: Joi.number()
        .positive()
        .integer()
        .required(),
});
const validateRemoveStudent = Joi.object({
    student_id: Joi.number()
        .integer()
        .positive()
        .required(),
    course_id: Joi.number()
        .integer()
        .positive()
        .required(),
});
const validateMark = Joi.object({
    mark: Joi.number()
        .integer()
        .min(0)
        .max(100)
        .required(),
    student_id: Joi.number()
        .positive()
        .integer()
        .required(),
    course_id: Joi.number()
        .positive()
        .integer()
        .required(),
    university_id: Joi.number()
        .positive()
        .integer()
        .required(),
});
const validateEditStudent = Joi.object({
    id: Joi.number()
        .positive()
        .integer()
        .required(),
    first_name: Joi.string()
        .alphanum()
        .min(2)
        .max(25),
    last_name: Joi.string()
        .alphanum()
        .min(2)
        .max(25),
    age: Joi.number()
        .positive()
        .integer()
        .max(150),
}).or('first_name', 'last_name', 'age');
module.exports = {
    validateUniversity,
    validateUniversityById,
    validateListUniversity,
    validateTeacher,
    validateListTeacher,
    validateCourse,
    validateCourseByIdUni,
    validateDeleteCourse,
    validateStudent,
    validateDeleteStudent,
    validateStudentsByUni,
    validateStudentsByCourse,
    validateRating,
    validateStudentByCourse,
    validateRemoveStudent,
    validateMark,
    validateEditStudent
};
