const http = require("http");
const countStudents = require("3-read_file_async.js");

const path = process.argv[3];
const app = http
  .createServer((req, res) => {
    console.log(req.url);
    if (req.url == "/students") {
      countStudents(path);
      console.log("This is the list of our students");
    }
    res.write("Hello Holberton School!");
    res.end();
  })
  .listen(1245);

module.exports = app;
