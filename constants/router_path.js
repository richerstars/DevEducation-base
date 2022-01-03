const PATH = {
    universities: {
        value: '/universities',
        list: '/universities/list',
        student: {
            rating: '/universities/student/rating',
        },
    },
    teacher: {
        value: '/teacher',
        list: '/teacher/list',
    },
    course: {
        value: '/course',
        list: '/course/list',
        student: '/course/student',
    },
    student: {
        value: '/student',
        university: {
            list: '/student/university/list',
        },
        course: {
            list: '/student/course/list',
            rating: '/student/course/rating',
        },
    },
    mark: {
        value: '/mark',
    },
};

Object.freeze(PATH);

module.exports = {
    PATH
};
