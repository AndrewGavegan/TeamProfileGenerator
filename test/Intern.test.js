const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should create an object of Intern with a parameter of "school" that must be a string', () => {
        const school = "University of Sydney";
        
        const intern = new Intern('Peter', 1, 'peter_jacobs@gmail.com', school);

        expect(intern.school).toEqual(intern.school);
    });
    it('should create an object of Intern with a parameter of "school" that must be a string', () => {
        const name = "Peter";
        const id = 1;
        const email = "peter@gmail.com";
        const invalidSchool = 6;
        const cb = () => new Intern(name, id, email, invalidSchool);
        const err = "School must be a string";
        expect(cb).toThrow(err);
    });

    describe('getSchool', () => {
        it('should return the school that the intern attended', () => {
            const school = "University of Sydney"
            const intern = new Intern('Peter', 1, 'peter_jacobs@gmail.com', school);

            myResult = intern.getSchool();

            expect(myResult).toEqual(school);
        });
    });
    describe('getRole', () => {
        it('should return the role of intern as intern', () => {
            const thisRole = 'Intern';
            const intern = new Intern('Peter', 1, 'peter_jacobs@gmail.com', 'University of Sydney');
            
            const myResults = intern.getRole();

            expect(myResults).toEqual(thisRole);
        });
    });
});