export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('length must be a number');
    }
    if (!Array.isArray(students)) {
      throw TypeError('students must be a array');
    }
    students.forEach((ele) => {
      if (typeof ele !== 'string') {
        throw TypeError('array elements must be a string');
      }
    });
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw TypeError('length must be a number');
    }
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw TypeError('students must be a array');
    }
    newStudents.forEach((ele) => {
      if (typeof ele !== 'string') {
        throw TypeError('array elements must be a string');
      }
    });
    this._students = newStudents;
  }
}
