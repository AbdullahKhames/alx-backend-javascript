#!/usr/bin/node
export default function getStudentIdsSum(students) {
  let result = 0;
  if (Array.isArray(students)) {
    result = students.reduce(
      (val, student) => val + student.id,
      result,
    );
  }
  return result;
}
