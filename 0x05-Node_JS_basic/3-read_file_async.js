const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }

    if (data) {
      const students = data.split('\n');
      students.shift();
      let i = students.length - 1;
      while (students[i] === '') {
        students.pop();
        i -= 1;
      }
      console.log(`Number of students: ${students.length}`);

      const studentsPerCourse = {};
      for (const s of students) {
        const studentData = s.split(',');
        const firstName = studentData[0];
        const course = studentData[3];
        if (course in studentsPerCourse) {
          studentsPerCourse[course].push(firstName);
        } else {
          studentsPerCourse[course] = [firstName];
        }
      }

      for (const course in studentsPerCourse) {
        if (course) {
          console.log(
            `Number of students in ${course}: ${
              studentsPerCourse[course].length
            }. List: ${studentsPerCourse[course].join(', ')}`,
          );
        }
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
