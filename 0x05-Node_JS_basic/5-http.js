const http = require('http');
const fs = require('fs');

const path = process.argv[2];
const hostname = 'localhost';
const port = 1245;
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
const app = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (url.pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (url.pathname === '/students') {
    const message = 'This is the list of our students\n';
    countStudents(process.argv[2])
      .then((payload) => {
        res.end(message + payload.join('\n'));
      })
      .catch((err) => {
        res.end(message + err.message);
      });
  }
});

app.listen(port, hostname);

module.exports = app;
