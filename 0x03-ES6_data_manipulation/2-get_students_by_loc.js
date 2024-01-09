#!/usr/bin/node
export default function getStudentsByLocation(students, city) {
  if (typeof city !== 'string') {
    throw TypeError('must be a string');
  }
  const filteredStudents = [];
  if (Array.isArray(students)) {
    filteredStudents.push(students.filter((val) => val.location === city));
  }
  return filteredStudents;
}
