#!/usr/bin/node
const fs = require('fs');

const Course = function courseConstructor(name, students) {
  this.name = name;
  this.students = students;
};
const courses = [];

function countStudents(path) {
  try {
    let numberOfStudents = 0;
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n');
    for (let idx = 1; idx < lines.length; idx += 1) {
      const line = lines[idx].split(',');
      if (line[0] && line[0] !== 'firstname') {
        numberOfStudents += 1;
        const courseNames = courses.map((course) => course.name);
        if (courseNames.includes(line[3])) {
          courses.forEach((course) => {
            if (course.name === line[3]) {
              course.students.push(line[0]);
            }
          });
        } else {
          const newCourse = new Course(line[3], [line[0]]);
          courses.push(newCourse);
        }
      }
    }
    console.log(`Number of students: ${numberOfStudents}`);
    for (let index = 0; index < courses.length; index += 1) {
      const course = courses[index];
      process.stdout.write(
        `Number of students in ${course.name}: ${course.students.length}. List: `,
      );
      for (let j = 0; j < course.students.length; j += 1) {
        const student = course.students[j];
        process.stdout.write(student);
        if (j !== course.students.length - 1) {
          process.stdout.write(', ');
        }
      }
      console.log();
    }
  } catch (err) {
    console.error(err);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
