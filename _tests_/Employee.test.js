// employee constructor
const Employee = require("../lib/Employee");

// create employee object
test("New Employee generated", () => {
    const employee = new Employee("Kevin", 90, "kevinng3292@gmail.com")

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
});

// obtain name from getId()
test("gets employee name", () => {
    const employee = new Employee("Kevin", 90, "kevinng3292@gmail.com")

    expect(employee.getName()).toEqual(expect.any(String))
});

// obtain id from getId()
test("gets employee id", () => {
    const employee = new Employee("Kevin", 90, "kevinng3292@gmail.com")

    expect(employee.getId()).toEqual(expect.any(Number))
});

// obtain email from getEmail()
test("gets employee email", () => {
    const employee = new Employee("Kevin", 90, "kevinng3292@gmail.com")

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()))
});

// obtain role from getRole()
test("gets role of employee", () => {
    const employee = new Employee("Kevin", 90, "kevinng3292@gmail.com")

    expect(employee.getRole()).toEqual("Employee")
});