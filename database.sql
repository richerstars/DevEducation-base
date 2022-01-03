CREATE TABLE universities
(
    id            serial PRIMARY KEY,
    country       TEXT NOT NULL,
    city          TEXT NOT NULL,
    name          TEXT NOT NULL,
    accreditation int  NOT NULL
);
CREATE TYPE roles AS ENUM ('student', 'teacher');
CREATE TABLE users
(
    id            serial PRIMARY KEY,
    role          roles,
    first_name    TEXT NOT NULL,
    last_name     TEXT NOT NULL,
    age           INT  NOT NULL,
    university_id INT  NOT NULL,
    FOREIGN KEY (universities_id) REFERENCES universities (id)
);
CREATE TABLE courses
(
    id            serial PRIMARY KEY,
    name          TEXT NOT NULL,
    user_id       INT,
    university_id INT,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (university_id) REFERENCES universities (id)
);
CREATE TABLE students_courses
(
    student_id INT NOT NULL,
    course_id  INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES users (id),
    FOREIGN KEY (course_id) REFERENCES courses (id)
);
CREATE TABLE marks
(
    id            serial PRIMARY KEY,
    mark          INT NOT NULL,
    student_id    INT NOT NULL,
    course_id     INT NOT NULL,
    university_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES users (id),
    FOREIGN KEY (course_id) REFERENCES courses (id),
    FOREIGN KEY (university_id) REFERENCES universities (id)
);
