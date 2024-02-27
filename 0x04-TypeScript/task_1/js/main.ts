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
export interface StudentClassInterface {
  displayName(): string;
  workOnHomework(): string;
}
// export interface StudentConstructor {
//   firstName: string;
//   lastName: string;
// }
//TypeScript - interface constructor https://dirask.com/posts/TypeScript-interface-constructor-kDLARp
export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;
  // constructor(config: StudentConstructor){
  //   this.firstName = config.firstName;
  //   this.lastName = config.lastName;
  // }
  constructor(firstName: string, lastName: string){
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

const student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: John


function createStudent(
  builder: StudentConstructor,
  firstName: string,
  lastName: string
): StudentClassInterface {
  return new builder(firstName, lastName);
}


const student2 = createStudent(StudentClass, "John", "Doe");
console.log(student2.workOnHomework()); // Output: Currently working
