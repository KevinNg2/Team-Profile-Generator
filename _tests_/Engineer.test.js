// Engineer constructor
const Engineer = require("../lib/Engineer");

// generates engineer object
test("creates Engineer object", () => {
    const engineer = new Engineer("Kevin", 90, "kevinng3292@gmail.com", "kevinng2")

    expect(engineer.github).toEqual(expect.any(String))
});

// retreives github from getGithub()
test("gets engineer github value", () => {
    const engineer = new Engineer("Kevin", 90, "kevinng3292@gmail.com", "kevinng2")

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()))
});

// gets role from getRole()
test("gets role of employee", () => {
    const engineer = new Engineer("Kevin", 90, "kevinng3292@gmail.com", "kevinng2")

    expect(engineer.getRole()).toEqual("Engineer")
});