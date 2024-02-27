#!/usr/bin/node
const fs = require("node:fs");

const Course = function (name, students) {
  this.name = name;
  this.students = students;
};
const courses = [];

function countStudents(path) {
  try {
    let array = null;
    let numberOfStudents = 0;
    const data = fs.readFileSync(path, "utf-8");
    const lines = data.split("\r\n");
    for (const line of lines) {
      array = line.split(",");
      if (array[0] == "" || array[0] == "firstname") {
        continue;
      }
      numberOfStudents++;
      const courseNames = courses.map((course) => course.name);
      if (courseNames.includes(array[3])) {
        courses.forEach((course) => {
          if (course.name == array[3]) {
            course.students.push(array[0]);
          }
        });
      } else {
        const newCourse = new Course(array[3], [array[0]]);
        courses.push(newCourse);
      }
    }
    console.log(`Number of students: ${numberOfStudents}`);
    for (let index = 0; index < courses.length; index++) {
      const course = courses[index];
      process.stdout.write(
        `Number of students in ${course.name}: ${
          course.students.length
        }. List: `
      );
      for (let j = 0; j < course.students.length; j++) {
        const student = course.students[j];
        process.stdout.write(student);
        if (j != course.students.length - 1) {
          process.stdout.write(', ');
        }
        
      }
      console.log();
    }
  } catch (err) {
    console.error(err);
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
