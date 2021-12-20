// using Employee constructor from employee.js
const Employee = require('../lib/Employee');

// expects a object created from inquirer
test('creates an employee object', () => {
    const employee = new Employee('squilliam', 777, "squilliamfancison@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets name from function
test('gets employee name', () => {
    const employee = new Employee('squilliam', 777, "squilliamfancison@gmail.com");

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from function
test('gets employee ID', () => {
    const employee = new Employee("squilliam", 777, "squilliamfancison@gmail.com");

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets email from function
test('gets employee email', () => {
    const employee = new Employee('squilliam', 777, "squilliamfancison@gmail.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from function
test('gets role of employee', () => {
    const employee = new Employee('squilliam', 777, "squilliamfancison@gmail.com");

    expect(employee.getRole()).toEqual("Employee")
});