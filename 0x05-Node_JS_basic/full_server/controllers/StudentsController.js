const readDatabase = require("../utils");

/**
 * Controls student routes
 */
class StudentsController {
  static getAllStudents(req, resp) {
    const path = process.argv.length > 2 ? process.argv[2] : "";
    readDatabase(path)
      .then((studentsByField) => {
        // sort fields
        const sortFunction = (a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase());
        const sortedFields = Object.keys(studentsByField).sort(sortFunction);
        const payload = [];
        for (const field of sortedFields) {
          if (field) {
            console.log(field);
            console.log(studentsByField[field]);
            console.log(studentsByField[field].length);
            payload.push(
              `Number of students in ${field}: ${
                studentsByField[field].length
              }. List: ${studentsByField[field].join(", ")}`
            );
          }
        }
        resp
          .status(200)
          .send(`This is the list of our students\n${payload.join("\n")}`);
      })
      .catch((err) => {
        resp.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(req, resp) {
    const path = process.argv.length > 2 ? process.argv[2] : "";
    const { major } = req.params;
    if (major !== "CS" && major !== "SWE") {
      resp.status(500).send("Major parameter must be CS or SWE");
      return;
    }

    readDatabase(path)
      .then((studentsByField) => {
        resp.status(200).send(`List: ${studentsByField[major].join(", ")}`);
      })
      .catch((err) => {
        resp.status(500).send(err.message);
      });
  }
}

module.exports = StudentsController;
