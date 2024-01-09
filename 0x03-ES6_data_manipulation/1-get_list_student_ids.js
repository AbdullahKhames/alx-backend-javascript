#!/usr/bin/node
export default function getListStudentIds(students) {
  const ids = [];
  if (Array.isArray(students)) {
    for (const student of students) {
      if (student.id !== undefined) {
        ids.push(student.id);
      }
    }
  }
  return ids;
}
