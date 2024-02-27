const http = require("http");

const path = process.argv[2];
const app = http
  .createServer((req, res) => {
    if (req.url == "/students") {
      res.write("This is the list of our students");
      fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
          throw new Error("Cannot load the database");
        }

        if (data) {
          const students = data.split("\n");
          students.shift();
          let i = students.length - 1;
          while (students[i] === "") {
            students.pop();
            i -= 1;
          }
          res.write(`Number of students: ${students.length}`);

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

          for (const course in studentsPerCourse) {
            if (course) {
              res.write(
                `Number of students in ${course}: ${
                  studentsPerCourse[course].length
                }. List: ${studentsPerCourse[course].join(", ")}`
              );
            }
          }
        }
      });
      res.end();
    } else {
      res.write("Hello Holberton School!");
      res.end();
    }
  })
  .listen(1245);

module.exports = app;
