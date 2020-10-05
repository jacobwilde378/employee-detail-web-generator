const { TestScheduler } = require('jest')
const Employee = require('../lib/Employee')

test('Creates and Employee Object', () => {
    const employeeTest = new Employee("Henry Cavill", "Z99", "henry.cavill@utah.edu")

    expect(employeeTest.name).toEqual(expect.any(String));
    
})