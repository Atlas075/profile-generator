// const Manager = require('../Manager')
// const Manager = require('./Manager')
// const Engineer = require('./Engineer')
// const intern = require('./Intern')

class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }
}    

module.exports = Employee