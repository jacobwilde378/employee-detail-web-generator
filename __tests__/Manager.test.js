const Manager = require('../lib/Manager')

test('Creates and Manager Object', () => {
    const managerTest = new Manager("Henry Cavill", "Z99", "henry.cavill@utah.edu", 1)

    // already tested through the Employee Test suite

    // expect(managerTest.name).toEqual(expect.any(String));
    // expect(managerTest.id).toEqual(expect.any(String));
    // expect(managerTest.email).toMatch(/@/);
    // expect(managerTest.email).toMatch(/./);

    expect(managerTest.office).toEqual(expect.any(Number));
})

test('Test Manager getRole function', () => {
    const managerTest1 = new Manager("Henry Cavill", "Z99", "henry.cavill@utah.edu", 1)

    expect(managerTest1.getRole()).toEqual("Manager")
})