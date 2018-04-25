

class Employee {
  constructor(firstName, familyName) {
    this._firstName = firstName;
    this._familyName = familyName;
  }

  getFullName() {
    return this._firstName + " " + this._familyName;
  }
}

class Manager {
  constructor(firstName, familyName) {
    this._firstName = firstName;
    this._familyName = familyName;
    this._managedEmployees = [];
  }

  getFullName() {
    return this._firstName + " " + this._familyName;
  }

  addEmployee(...args) {
    this._managedEmployees.push(...args);
  }
}

var manager = new Manager("Evan", "Graham");
var employee1 = new Employee("Rachel", "Green");
var employee2 = new Employee("David", "Smith");

manager.addEmployee(employee1, employee2);

console.log(manager.getFullName());
console.log(employee1.getFullName());
console.log(employee2.getFullName());
