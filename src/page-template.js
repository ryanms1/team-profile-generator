const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const Manager = require('../lib/Manager')
// const Intern = require('../lib/Intern')


const generateManager = employees => {
    return `${employees
        .filter((employee) => employee instanceof Engineer)
        .map((engineer) => {
            return `
            <div class="employee-card">
                <div class="employee">
                    <h2 class="name">${engineer.name}</h2>
                    <h3 class="role"><i class="fa-solid fa-glasses"></i> ${engineer.getRole()}</h3>
                </div>
                <ul class="info">
                    <li>ID: ${engineer.id}</li>
                    <li class="list-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="list-item">GitHub: <a href='https://github.com/${engineer.github}'>${engineer.github}</a></li>
                </ul>
            </div> ` }).join('')}
    `
}

const generateIntern = employees => {
    return `${employees
        .filter((employee) => employee instanceof Intern)
        .map((intern) => {
            return `
                <div class="employee-card">
                    <div class="employee">
                        <h2 class="name">${intern.name}</h2>
                        <h3 class="role"><i class="fa-solid fa-user-graduate"></i> ${intern.getRole()}</h3>
                    </div>
                    <ul class="info">
                        <li>ID: ${intern.id}</li>
                        <li class="list-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                        <li class="list-item">School: ${intern.school}</li>
                    </ul>
                </div> `}).join('')}
    `
}


module.exports = teamData => {
    const { employees, ...teamManager } = teamData
    console.log(teamManager, employees)


    const { name, id, email, officeNumber } = teamManager
    const manager = new Manager(name, id, email, officeNumber)
    generateManager(employees)

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="../src/style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
    </head>

    <body>
        <header>
            <h1 class="title">My Team</h1>
        </header>
        <main class="container">
            <div class="employee-card">
                <div class="employee">
                    <h2 class="name">${manager.name}</h2>
                    <h3 class="role"><i class="fa-solid fa-mug-hot"></i> ${manager.getRole()}</h3>
                </div>
                <ul class="info">
                    <li>ID: ${manager.id}</li>
                    <li class="list-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-item">Office number: ${manager.officeNumber}</li>
                </ul>
            </div>
            ${generateManager(employees)}
            ${generateIntern(employees)}
        </main>
    </body>

    </html>
    `
};