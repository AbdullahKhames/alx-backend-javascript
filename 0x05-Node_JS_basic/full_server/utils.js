const fs = require("fs");

const readDatabase = (path) =>
  new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error("Cannot load the database"));
    }
    fs.readFile(path, "utf-8", (error, data) => {
      if (error) {
        reject(new Error("Cannot load the database"));
      }

      if (data) {
        const students = data.split("\n");
        students.shift();
        let i = students.length - 1;
        while (students[i] === "") {
          students.pop();
          i -= 1;
        }

        const studentsPerCourse = {};

        for (const s of students) {
          const studentData = s.split(",");
          const firstName = studentData[0];
          const course = studentData[3];
          if (course in studentsPerCourse) {
            studentsPerCourse[course].push(firstName);
          } else {
            studentsPerCourse[course] = [firstName];
          }
        }
        resolve(studentsPerCourse);
      }
    });
  });

module.exports = readDatabase;
