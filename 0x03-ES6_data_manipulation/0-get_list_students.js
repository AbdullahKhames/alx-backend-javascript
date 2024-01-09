#!/usr/bin/node
function student(id = 1, firstName = 'Guillaume', location = 'San Francisco') {
  return {
    id,
    firstName,
    location,
  };
}
export default function getListStudents() {
  return [
    student(),
    student(2, 'James', 'Columbia'),
    student(5, 'Serena', 'San Francisco'),
  ];
}
