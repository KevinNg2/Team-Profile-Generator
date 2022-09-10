// manager constructor
const Manager = require("../lib/Manager");

// create manager object
test("creates manager object", () => {
    const manager = new Manager("Kevin", 90, "kevinng3292@gmail.com", 5)

    expect(manager.officeNumber).toEqual(expect.any(Number))
});

// gets role from getRole()
test("gets role of employee", () => {
    const manager = new Manager("Kevin", 90, "kevinng3292@gmail.com")

    expect(manager.getRole()).toEqual("Manager")
});