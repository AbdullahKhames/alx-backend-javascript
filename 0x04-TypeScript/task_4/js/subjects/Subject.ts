namespace Subjects {
  export class Subject {
    teacher: Teacher | undefined;

    public setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
