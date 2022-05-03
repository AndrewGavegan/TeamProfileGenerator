
const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe("init", () => {
        it("should init an employee an object with a name, id and email if provided valid arguments", () =>{
            const name = 'Peter';
            const id = 1;
            const email = "peter_jacobs@gmail.com.au"
            const employee = new Employee(name, id, email)
            expect(employee.name).toEqual(name);
            expect(employee.id).toEqual(id);
            expect(employee.email).toEqual(email);
        });
    });
    describe('getName', () => {
        it('should return the name of the employee', () => {
            const employee = new Employee('Peter', 1, 'peter_jacobs@gmail.com');
            
            const results = employee.getName();

            expect(results).toEqual('Peter');
        });
    });
    describe('getId', () => {
        it('should return the Id of the employee', () => {
            const employee = new Employee('Peter', 1, 'peter_jacobs@gmail.com');
            
            const results = employee.getId();

            expect(results).toEqual(1);
        });
    });
    describe('getEmail', () => {
        it('should return the Email of the employee', () => {
            const employee = new Employee('Peter', 1, 'peter_jacobs@gmail.com');
            
            const results = employee.getEmail();

            expect(results).toEqual('peter_jacobs@gmail.com');
        });
    });
    describe('getRole', () => {
        it('should return the Role of the employee', () => {
            const thisRole = 'Employee';
            const employee = new Employee('Peter', 1, 'peter_jacobs@gmail.com');
            
            const results = employee.getRole();

            expect(results).toEqual(thisRole);
        });
    });
});