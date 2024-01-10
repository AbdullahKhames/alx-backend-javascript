"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var muhammad = {
    firstName: "muhammad",
    lastName: "abdullah",
    age: 63,
    location: "meccah",
};
var abdullah = {
    firstName: "abdullah",
    lastName: "khames",
    age: 27,
    location: "giza",
};
var studentsList = [muhammad, abdullah];
var table = document.createElement("table");
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var _a = studentsList_1[_i], fn = _a.firstName, ln = _a.lastName, a = _a.age, l = _a.location;
    // Create row element
    var row = document.createElement("tr");
    // Create cells
    var firstName = document.createElement("td");
    var lastName = document.createElement("td");
    var age = document.createElement("td");
    var location_1 = document.createElement("td");
    // Insert data to cells
    firstName.innerText = fn;
    lastName.innerText = ln;
    age.innerText = a.toString();
    location_1.innerText = l;
    // Append cells to row
    row.appendChild(firstName);
    row.appendChild(lastName);
    row.appendChild(age);
    row.appendChild(location_1);
    // Append row to table body
    table.appendChild(row);
}
console.log(table);
