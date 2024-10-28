let { Employee } = require('./Employee')

class SalesPerson extends Employee {
    #totalSales = 0

    constructor(clients, name, position, salary, isHired) {
        super(name, position, salary, isHired)
        this.clients = clients
    }

    getSalesNumbers() {
        return this.#totalSales
    }

    makeSale(amount) {
        this.#totalSales += amount
    }

    
}

module.exports = {
    SalesPerson,
}