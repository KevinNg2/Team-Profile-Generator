// intern constructor
const Intern = require("../lib/Intern");

// constructing intern object
test("creates Intern object", () => {
    const intern = new Intern("Kevin", 90, "kevinng3292@gmail.com", "UCI")

    expect(intern.school).toEqual(expect.any(String))
});

// identify school from getSchool()
test("gets employee school", () => {
    const intern = new Intern("Kevin", 90, "kevinng3292@gmail.com", "UCI")

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()))
});

// gets role from getRole()
test("gets role of employee", () => {
    const intern = new Intern("Kevin", 90, "kevinng3292@gmail.com", "UCI")

    expect(intern.getRole()).toEqual("Intern")
});