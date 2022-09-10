// initiate all the requirements 
const generateHTML = require("./src/generateHTML")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const fs = require("fs")
const inquirer = require("inquirer")
const teamArray = []

// express link
const express = require("express")
const app = express();
app.use(express.static("public"))

// begin manager prompt 
const addManager = async () => {
    const managerInput = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please identify who the manager is on this team?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        },
    ])
    const {name, id, email, officeNumber} = managerInput
    const manager = new Manager (name, id, email, officeNumber)
    teamArray.push(manager)
    console.log(manager)
};

// adding employees to the team 
const addEmployee = () => {
    console.log(`
    ----------
Members of the workforce
    ----------
    `)

    return (
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "role",
                    message: "What is your employee's role?",
                    choices: ["Engineer", "Intern"],
                },
                {
                    type: "input",
                    name: "name",
                    message: "What is the employee's name?",
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is the employee's ID?",
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the employee's email?",
                },
                {
                    type: "input",
                    name: "github",
                    message: "What is the employee's github username?",
                },
                {
                    type: "input",
                    name: "school",
                    message: "Where did the intern attend school?",
                },
                {
                    type: "confirm",
                    name: "confirmEmployeeAdded",
                    message: "Is there anyone else on the team?",
                },
            ])

            // employee data
            .then(employeeData => {
                let {name, id, email, role, github, school, confirmEmployeeAdded} = employeeData
                let employee

                if (role === "Engineer") {
                    employee = new Engineer(name, id, email, github)

                    console.log(employee);
                } else if (role === "Intern") {
                    employee = new Intern(name, id, email, school)

                    console.log(employee);
                }

                teamArray.push(employee)

                if(confirmEmployeeAdded) {
                    return addEmployee(teamArray)
                } else {
                    return teamArray
                }
            })
    )
};

// generated HTML
const writeFile = data => {
    fs.writeFile("./dist/index.html", data, err => {
        if (err) {
            console.log(err)
            return
        } else {
            console.log("Your team profile is all set! Here is the generated index.html")
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })
    .catch(err => {
        console.log(err)
    })