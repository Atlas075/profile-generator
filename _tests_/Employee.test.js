// const Manager = require("../lib/Manager");
// const Engineer = require("../lib/Engineer");
// const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");
const employee = new Employee('Don', '252', 'donniemassenburg75@gmail.com')


test("", () => {

})

test("consructor", () => {
expect(employee.name).toBe ('Don')
expect(employee.id).toBe ('252')
expect(employee.email).toBe ('donniemassenburg75@gmail.com')
})


test("test getName()", () => {
    const employee = new Employee ('Don')
  expect(employee.getName()).toBe("Don");
});

test("test getId()", () => {
  expect(employee.getId()).toBe("252");
});

test("test getEmail()", () => {
  expect(employee.getEmail()).toBe("donniemassenburg75@gmail.com");
});

test("test getRole", () => {
  expect(employee.getRole()).toBe("Employee");
});
