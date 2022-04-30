const { getMaxListeners } = require('process');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super('John Smith', 1, 'john_smith@gmail.com')
        this.officeNumber = officeNumber;
    }
}
