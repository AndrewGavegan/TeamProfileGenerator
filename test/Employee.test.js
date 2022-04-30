
const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe("init", () => {
        it("should init an employee an object with a name, id and email if provided valid arguments", () =>{
            const employee = new Employee('Peter', 2, 'peter_jacobs@gmail.com')

            expect(employee.name).toEqual('Peter');
            expect(employee.id).toEqual(2);
            expect(employee.email).toEqual('peter_jacobs@gmail.com');
        });
        it("should throw an error if provided no arguments", () =>{
            const cb = () => new Employee();
            
            const err = new Error("Expected paramater name to exist");

            expect(cb).toThrowError();
        });
        it("should throw an error if not provided an ID", () =>{
            const cb = () => new Employee('Peter');

            const err = new Error("Expected ID to be a number above 0");

            expect(cb).toThrowError(err);
        });
        it("should throw an error if not provided an Email", () =>{
            const cb = () => new Employee('Peter', 3);

            const err = new Error("Expected email to exist");

            expect(cb).toThrowError(err);
        });
        it("should throw an error if ID is a negative number", () =>{
            const cb = () => new Employee('Peter', -1, 'peter_jacobs@gmail.com');

            const err = new Error("Expected ID to be a positive integer")

            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'name' isn't a string", () =>{
            const cb = () => new Employee(3, 1, 'peter_jacobs@gmail.com');

            const err = new Error("Expected name to be a string")

            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'id' is not a number", () =>{
            const cb = () => new Employee('Peter', '1', 'peter_jacobs@gmail.com');

            const err = new Error("Expected id parameter to be a non negative number")

            expect(cb).toThrowError(err);
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
})