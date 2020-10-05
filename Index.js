const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const fs = require('fs')
const inquirer = require('inquirer')

console.log("i'm running")

let engineer = new Engineer("Troy", "C32", "troy.berry@cypruscu.com", "tberry")

let intern = new Intern("Geo", "E46", "geoff.dutson@cypruscu.com", "University of Utah")

//let test = new Employee("Jacob", 378, "jacob.wilde@utah.edu")

// console.log(manager)

// console.log(engineer)

// console.log(intern)

//****************************************************************************************************************************************

managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Please enter the manager name:  '
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Please enter the manager ID:  '
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Please enter the manager email'
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: 'Please enter the manager office name:  '
    }

]

engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'Please enter the engineers Name:  '
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'Please enter the engineers Id:  '
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'Please enter the engineers email address:  '
    },
    {
        type: 'input',
        name: 'engineerGit',
        message: 'Please enter the engineers Github Username:  '
    }
]

internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'Please enter the interns Name:  '
    },
    {
        type: 'input',
        name: 'internId',
        message: 'Please enter the interns ID:  '
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'Please enter the interns email address:  '
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'Please enter the interns School Name:  '
    }
]



// program to prompt for manager details
const myManager = () => {
    return inquirer.prompt(managerQuestions)
}

//manager menu
const managerMenu = () => {
    console.log("i'm the best")
}

//program for new engineer

//program for new intern

// program to create webpage



// run program area

myManager()
    .then(managerData => {
        let manager = new Manager(managerData.managerName, managerData.managerId, managerData.managerEmail, managerData.managerOffice);
        console.log(manager)
        return manager
    })
    .then(managerMenu())