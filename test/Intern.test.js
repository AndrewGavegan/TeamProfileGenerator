const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should create an object of Intern with a parameter of "school" that must be a string', () => {
        const school = "University of Sydney";
        
        const intern = new Intern('Peter', 1, 'peter_jacobs@gmail.com', school);

        expect(intern.school).toEqual(school);
    });
    
    describe('getSchool', () => {
        it('should return the school that the intern attended', () => {
            const school = "University of Sydney"
            const intern = new Intern('Peter', 1, 'peter_jacobs@gmail.com', school);

            myResult = intern.getSchool();

            expect(myResult).toEqual(intern.school);
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