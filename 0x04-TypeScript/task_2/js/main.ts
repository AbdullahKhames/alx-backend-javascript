export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}
export class Teacher {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return " Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string) {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

const emp1 = createEmployee(200);
const emp2 = createEmployee(660);

console.log(createEmployee(200));
console.log(emp2.getCoffeeBreak());

function isDirector(emp: Director | Teacher): boolean {
  return emp instanceof Director;
}

function executeWork(emp: Director | Teacher): void {
  if (isDirector(emp)) {
    console.log((emp as Director).workDirectorTasks());
  } else {
    console.log((emp as Teacher).workTeacherTasks());
  }
}

executeWork(createEmployee(200));
executeWork(createEmployee(2000));

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

// Example usage:
console.log(teachClass("Math")); // Output: Teaching Math
console.log(teachClass("History"));


// export function isDirector(
//   employee: DirectorInterface | TeacherInterface
// ): employee is DirectorInterface {
//   return (employee as DirectorInterface).workDirectorTasks !== undefined;
// }

// export function executeWork(
//   employee: DirectorInterface | TeacherInterface
// ): string {
//   if (isDirector(employee)) {
//     return employee.workDirectorTasks();
//   } else {
//     return employee.workTeacherTasks();
//   }
// }
