const inquirer = require('inquirer')
const fs = require('fs')
const generatePage = require('./src/page-template')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')




const promptUser = () => {
    console.log('Please build your team.')


    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("The team manager's name is required.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's id?",
            validate: idInput => {
                if (idInput) {
                    return true
                } else {
                    console.log("The team manager's id is required.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log("The team manager's email is required.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?",
            validate: officeInput => {
                if (officeInput) {
                    return true
                } else {
                    console.log("The team manager's office number is required.")
                    return false
                }
            }
        }
    ])
}

const promptEmployee = teamData => {

    if (!teamData.employees) {
        teamData.employees = [];
    }

    return inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', "I don't want to add anymore team members."],
            validate: addInput => {
                if (addInput) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: "What is your engineer's name?",
            when: (choice) => choice.addEmployee === 'Engineer',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("The engineer's name is required.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your engineer's id?",
            when: (choice) => choice.addEmployee === 'Engineer',
            validate: idInput => {
                if (idInput) {
                    return true
                } else {
                    console.log("The engineer's id is required.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your engineer's email?",
            when: (choice) => choice.addEmployee === 'Engineer',
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log("The engineer's email is required.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your engineer's GitHub username?",
            when: (choice) => choice.addEmployee === 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true
                } else {
                    console.log("The engineer's GitHub username is required.")
                    return false
                }
            }
        },
        //////////////////////////intern
        {
            type: 'input',
            name: 'name',
            message: "What is your intern's name?",
            when: (choice) => choice.addEmployee === 'Intern',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("The intern's name is required.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your intern's id?",
            when: (choice) => choice.addEmployee === 'Intern',
            validate: idInput => {
                if (idInput) {
                    return true
                } else {
                    console.log("The intern's id is required.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your intern's email?",
            when: (choice) => choice.addEmployee === 'Intern',
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log("The intern's email is required.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is your intern's school?",
            when: (choice) => choice.addEmployee === 'Intern',
            validate: githubInput => {
                if (githubInput) {
                    return true
                } else {
                    console.log("The intern's school is required.")
                    return false
                }
            }
        },
    ])
        .then(employeeData => {
            if (employeeData.addEmployee === 'Engineer') {
                const { name, id, email, github } = employeeData
                const engineer = new Engineer(name, id, email, github)

                teamData.employees.push(engineer)

                return promptEmployee(teamData)
            } else if (employeeData.addEmployee === 'Intern') {
                const { name, id, email, school } = employeeData
                const intern = new Intern(name, id, email, school)

                teamData.employees.push(intern)

                return promptEmployee(teamData)
            } else {
                return teamData
            }
        })

}

promptUser()
    .then(promptEmployee)
    .then(teamData => {
        console.log(teamData)

        const pageHTML = generatePage(teamData)

        fs.writeFile('./dist/index.html', pageHTML, err => {
            if (err) throw err;
        })

        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) throw err;
        })
    })
