const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should create an object of Engineer with a parameter of "github" that must be a string', () => {
        const github = "PeterJacobs"
        
        const engineer = new Engineer('Peter', 1, 'peter_jacobs@gmail.com', github);

        expect(engineer.github).toEqual(github);
    });

    describe('getGithub', () => {
        it('should return the engineers github', () => {
            const github = 'PeterJacobs'
            const engineer = new Engineer('Peter', 1, 'peter_jacobs@gmail.com', github)

            const myResult = engineer.getGithub();

            expect(myResult).toEqual(engineer.github);
        });
    });
    describe('getRole', () => {
        it('should return the Role of the Engineer', () => {
            const thisRole = 'Engineer';
            const engineer = new Engineer('Peter', 1, 'peter_jacobs@gmail.com', 'PeterJacobs');
            
            const results = engineer.getRole();

            expect(results).toEqual(thisRole);
        });
    });
});