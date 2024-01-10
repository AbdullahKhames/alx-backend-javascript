// readonly attribute to denote that this attribute can only be assigned once
// optional attribute by using the ? sign.
export default interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);
interface printTeacherFunction {
  printTeacher(firstName: string, lastName: string): string;
}


function printTeacher(firstName:string, lastName:string){
  return `${firstName.charAt(0)}. ${lastName}`
}

console.log(printTeacher("John", "Doe"));
interface Student {
  workOnHomework(): string;
  displayName():string;
}
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

class StudentClass implements Student {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass({ firstName: 'John', lastName: 'Doe' });
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: John
