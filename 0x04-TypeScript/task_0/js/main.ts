export default interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const muhammad: Student = {
  firstName: "muhammad",
  lastName: "abdullah",
  age: 63,
  location: "meccah",
};
const abdullah: Student = {
  firstName: "abdullah",
  lastName: "khames",
  age: 27,
  location: "giza",
};

const studentsList = [muhammad, abdullah];

const table = document.createElement("table");
for(const {firstName:fn, lastName:ln, age:a, location:l} of studentsList){
  // Create row element
  let row = document.createElement("tr");

  // Create cells
  let firstName = document.createElement("td");
  let lastName = document.createElement("td");
  let age = document.createElement("td");
  let location = document.createElement("td");

  // Insert data to cells
  firstName.innerText = fn;
  lastName.innerText = ln;
  age.innerText = a.toString();
  location.innerText = l;

  // Append cells to row
  row.appendChild(firstName);
  row.appendChild(lastName);
  row.appendChild(age);
  row.appendChild(location);

  // Append row to table body
  table.appendChild(row);
}
console.log(table);
