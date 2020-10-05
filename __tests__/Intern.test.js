const Intern = require('../lib/Intern')

test('Creates and Intern Object', () => {
    const internTest = new Intern("Henry Cavill", "Z99", "henry.cavill@utah.edu", "University of Utah")

    // already tested through the Employee Test suite

    // expect(internTest.name).toEqual(expect.any(String));
    // expect(internTest.id).toEqual(expect.any(String));
    // expect(internTest.email).toMatch(/@/);
    // expect(internTest.email).toMatch(/./);


    expect(internTest.school).toEqual(expect.anything());
})

test('Test Intern getRole Function', () => {
    const internTest1 = new Intern("Henry Cavill", "Z99", "henry.cavill@utah.edu", "University of Utah")

    expect(internTest1.getRole()).toEqual("Intern")
})