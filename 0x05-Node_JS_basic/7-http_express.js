const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const path = process.argv[2];
function countStudents() {
  return new Promise((resolve, reject) => {
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
        const payload = [`Number of students: ${students.length}`];

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
            payload.push(
              `Number of students in ${course}: ${
                studentsPerCourse[course].length
              }. List: ${studentsPerCourse[course].join(', ')}`,
            );
          }
        }
        resolve(payload);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const message = 'This is the list of our students\n';
  countStudents(process.argv[2])
    .then((payload) => {
      res.send(message + payload.join('\n'));
    })
    .catch((err) => {
      res.send(message + err.message);
    });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

module.exports = app;
