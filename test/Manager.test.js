const Manager = require('../lib/Manager');

// only have to test for additional parameters that the parent class of employee doesnt have, also test for getRole //
describe('Manager', () => {
    it('should create an object of Manager with a parameter of "officeNumber" that must be a positive number', () => {
        const officeNumber = 5
        
        const manager = new Manager('Peter', 1, 'peter_jacobs@gmail.com', officeNumber);

        expect(manager.officeNumber).toEqual(officeNumber);
    });

    it('throws an error if officeNumber parameter is not a positive number', () => {
        const invalidOfficeNumber = -5

        const cb = () => new Manager('Peter', 1, 'peter_jacobs@gmail.com', invalidOfficeNumber);

        expect(cb).toThrow();
    })

    describe('getRole', () => {
        it('should return the Role of the Manager', () => {
            const thisRole = 'Manager';
            const manager = new Manager('Peter', 1, 'peter_jacobs@gmail.com', 5);
            
            const results = manager.getRole();

            expect(results).toEqual(thisRole);
        });
    });
});