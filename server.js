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
            message: "Enter team members name.",
            name: "name",
          },
          {
            type: "input",
            message: "Enter team members ID.",
            name: "id",
          },
          {
            type: "input",
            message: "Enter team members email address.",
            name: "email",
          },
          {
            type: "list",
            message: "Enter team members role",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"],
          },
    ]);

    if (Member.role == "Manager") {
        const officeNumber = await inquirer.prompt([
            {
                type: "input",
                message: "What is this managers office number?",
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
                    message: "What is this engineers GitHub username?",
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
                    message: "What school did this intern attend",
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
            message: 'Do you want to create this team as it is or add another member?',
            choices: ['Add another member', 'Create this team'],
            name: 'addNewMember',
        }
    ])
    if (addMember.addNewMember === 'Add a member') {
        return furtherQuestions()
    } return generateTeam();
}

furtherQuestions();

function generateTeam () {
    fs.writeFileSync("dist/index.html", createSite(teamMember));
    console.log("Created Team Members Page!")
}