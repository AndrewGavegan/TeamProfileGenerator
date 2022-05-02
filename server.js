const inquirer = require('inquirer');
const fs = require('fs');
const createSite = require('./lib/card');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMember = [];

const Questions = async () => {
    const Member = await inquirer.prompt([
        {
            type: "input",
            message: "What's your name?",
            name: "name",
          },
          {
            type: "input",
            message: "What's your ID?",
            name: "id",
          },
          {
            type: "input",
            message: "What's your email address?",
            name: "email",
          },
          {
            type: "list",
            message: "What's your role?",
            name: "role",
            choices: ["Manager", "Employee", "Intern"],
          },
    ]);

    if (Member.role == "Manager") {
        const officeNumber = await inquirer.prompt([
            {
                type: "input",
                message: "What's your office number",
                name: "officeNumber",
            },
        ])
        const manager = new Manager(
            Member.name, Member.id, Member.email, officeNumber.officeNumber);
            teamMember.push(manager);
        } else if (Member.role == "Engineer") {
            const GitHub = await inquirer.prompt([
                {
                    type: "input",
                    message: "What's your GitHub username?",
                    name: "github",
                }
            ])
            const engineer = new Engineer(
                Member.name, Member.id, Member.email, GitHub.github);
                teamMember.push(engineer);
        } else if (Member.role == "Intern") {
            const School = await inquirer.prompt([
                {
                    type: "input",
                    message: "What school did you attend",
                    name: "school",
                }
            ])
            const intern = new Intern(
                Member.name, Member.id, Member.email, School.school);
                teamMember.push(intern)
        }
};

async function furtherQuestions() {
    await Questions()

    const addMember = await inquirer.prompt([
        {
            type: 'list',
            message: 'Do you want to create a team or add a member?',
            choices: ['Add a member', 'Create this team'],
            name: 'addNewMember',
        }
    ])
    if (addMember.addNewMember === 'Add a member') {
        return furtherQuestions()
    } return generateTeam();
}

furtherQuestions();

function generateTeam () {
    fs.writeFileSync("dist/index.html", )
}