const Engineer = require('../lib/Engineer')

test('Creates and Engineer Object', () => {
    const engineerTest = new Engineer("Henry Cavill", "Z99", "henry.cavill@utah.edu", "jacobwilde378")

    expect(engineerTest.name).toEqual(expect.any(String));
    expect(engineerTest.id).toEqual(expect.any(String));
    expect(engineerTest.email).toMatch(/@/);
    expect(engineerTest.email).toMatch(/./);
    expect(engineerTest.git).toEqual(expect.anything());
})