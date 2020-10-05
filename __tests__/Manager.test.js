const Manager = require('../lib/Manager')

test('Creates and Manager Object', () => {
    const internTest = new Manager("Henry Cavill", "Z99", "henry.cavill@utah.edu", 1)

    expect(internTest.name).toEqual(expect.any(String));
    expect(internTest.id).toEqual(expect.any(String));
    expect(internTest.email).toMatch(/@/);
    expect(internTest.email).toMatch(/./);
    expect(internTest.office).toEqual(expect.any(Number));
})