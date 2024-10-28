let { Employee } = require('./Employee')

class SoftwareEngineer extends Employee {
    #programmingLanguages

    constructor(programmingLanguages, name, position, salary, isHired) {
        super(name, position, salary, isHired)
        this.#programmingLanguages = programmingLanguages
    }
    setProgrammingLanguage(language) {
        this.#programmingLanguages.push(language)
    }
    getProgrammingLanguages() {
        return this.#programmingLanguages
    }

    
}

module.exports = {
    SoftwareEngineer,
}