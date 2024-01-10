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
