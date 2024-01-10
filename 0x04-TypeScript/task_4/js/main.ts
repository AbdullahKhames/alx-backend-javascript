
const cTeacher: Subjects.Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
};

const cpp = new Subjects.Cpp();
cpp.setTeacher(cTeacher);
console.log('C++:', cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const java = new Subjects.Java();
java.setTeacher(cTeacher);
console.log('Java:', java.getRequirements());
console.log(java.getAvailableTeacher());

const react = new Subjects.React();
react.setTeacher(cTeacher);
console.log('React:', react.getRequirements());
console.log(react.getAvailableTeacher());
