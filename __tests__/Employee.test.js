const { TestScheduler } = require('jest')
const Employee = require('../lib/Employee')

test('Creates and Employee Object', () => {
    const employeeTest = new Employee("Henry Cavill", "Z99", "henry.cavill@utah.edu")

    expect(employeeTest.name).toEqual(expect.any(String));
    expect(employeeTest.id).toEqual(expect.any(String));
    expect(employeeTest.email).toMatch(/@/);
    expect(employeeTest.email).toMatch(/./);
})

test('Test getName function', () => {
    const employeeTest1 = new Employee("Henry Cavill", "Z99", "henry.cavill@utah.edu");

    expect(employeeTest1.getName()).toEqual("Henry Cavill")
})

test('Test getId function', () => {
    const employeeTest1 = new Employee("Henry Cavill", "Z99", "henry.cavill@utah.edu");

    expect(employeeTest1.getId()).toEqual("Z99")
})

test('Test getEmail function', () => {
    const employeeTest1 = new Employee("Henry Cavill", "Z99", "henry.cavill@utah.edu");

    expect(employeeTest1.getEmail()).toEqual("henry.cavill@utah.edu")
})

test('Test getRole function', () => {
    const employeeTest1 = new Employee("Henry Cavill", "Z99", "henry.cavill@utah.edu");

    expect(employeeTest1.getRole()).toEqual("Employee")
})