#!/usr/bin/node
const fs = require("fs");

function countStudents(path) {
  return new Promise((resolve, reject) => {
    const courses = {};
    let numberOfStudents = 0;

    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject("Cannot load the database");
      } else {
        const lines = data.split("\n");
        for (const line of lines) {
          const lineData = line.split(",");
          if (lineData[0] && lineData[0] !== "firstname") {
            numberOfStudents += 1;
            if (lineData[3] in courses) {
              courses[lineData[3]].push(lineData[0]);
            } else {
              courses[lineData[3]] = [lineData[0]];
            }
          }
        }
        console.log(`Number of students: ${numberOfStudents}`);
        Object.keys(courses).forEach((key) => {
          const students = courses[key];
          process.stdout.write(
            `Number of students in ${key}: ${students.length}. List: `
          );
          students.forEach((student, idx) => {
            process.stdout.write(student);
            if (idx < student.length - 1) {
              process.stdout.write(", ");
            }
          });
          console.log();
        });
        resolve();
      }
    });
  });
}

module.exports = countStudents;
