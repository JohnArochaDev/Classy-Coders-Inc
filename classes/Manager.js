let { Employee } = require('./Employee')

class Manager extends Employee {
    #employeesManaged = []

    constructor(department, name, position, salary, isHired) {
        super(name, position, salary, isHired)
        this.department = department
    }

    getEmployeesManaged() {
        return this.#employeesManaged
    }
    addEmployeeManaged(employee) {
        this.#employeesManaged.push(employee)
    }
    
}

module.exports = {
    Manager,
}