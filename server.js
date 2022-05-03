// requiring relevant packages and files from other directory //
const inquirer = require('inquirer');
const fs = require('fs');
const createSite = require('./lib/card');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// array that holds the end prodyuct of the members that are added //
const teamMember = [];

// questions that are asked for all employees //
const Questions = async () => {
    const Member = await inquirer.prompt([
        {
          type: "list",
          message: "Enter team members role.",
          name: "role",
          choices: ["Manager", "Engineer", "Intern"],
        },
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
    ]);
    // ask for office number if role is a manager //
    if (Member.role == "Manager") {
        const officeNumber = await inquirer.prompt([
            {
                type: "input",
                message: "What is this managers office number?",
                name: "officeNumber",
            },
        ])
        // creating a new manager from the manager class format created in manager.js
        const manager = new Manager(
            Member.name, Member.id, Member.email, officeNumber.officeNumber);
            teamMember.push(manager);
            // ask for github username if role is engineer //
        } else if (Member.role == "Engineer") {
            const GitHub = await inquirer.prompt([
                {
                    type: "input",
                    message: "What is this engineers GitHub username?",
                    name: "github",
                }
            ])
            // creating a new engineer from the engineer class format created in engineer.js
            const engineer = new Engineer(
                Member.name, Member.id, Member.email, GitHub.github);
                teamMember.push(engineer);
                // asking for school if role is intern //
        } else if (Member.role == "Intern") {
            const School = await inquirer.prompt([
                {
                    type: "input",
                    message: "What school did this intern attend",
                    name: "school",
                }
            ])
                    // creating a new intern from the intern class format created in intern.js
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
            choices: ['Add another member.', 'Create this teams page.'],
            name: 'addNewMember',
        }
    ])
    // if user selects ass another member then the questions function is ran again //
    if (addMember.addNewMember === 'Add another member.') {
        return furtherQuestions()
    } // otherwise, the html is appended with this function //
    return generateTeam();
}

furtherQuestions();

function generateTeam () {
    // using fs package to create the index.html//
    fs.writeFileSync("dist/index.html", createSite(teamMember));
    console.log("Created Team Members Page!")
}