const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const fs = require('fs')
const inquirer = require('inquirer')

console.log("i'm running")

empArray = []

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
managerOptions = [
    {
        type: 'list',
        name: 'managerSelection',
        message: 'Please select an option from below:  ',
        choices: ['Add an Engineer', 'Add an Intern', 'Create HTML Code']
    }
]
const addEngineer = () => {
    inquirer.prompt(engineerQuestions)
        .then(engResponses => {
            let tmpEng = new Engineer(engResponses.engineerName, engResponses.engineerId, engResponses.engineerEmail, engResponses.engineerGit)
            empArray.push(tmpEng)
        })
}

const addIntern = () => {
    console.log('im building an intern')
}

//build html stuff
const buildHtml = () => {
    console.log('html')
}


//manager menu
const managerMenu = () => {
    inquirer.prompt(managerOptions)
        .then(managerSelectionResponse => {
            console.log(managerSelectionResponse.managerSelection)
            if (managerSelectionResponse.managerSelection === "Add an Engineer") {
                console.log("imma add an engineer!")
                addEngineer();
                managerMenu();
            }else if (managerSelectionResponse.managerSelection === "Add an Intern") {
                console.log("imma add an intern!")
                addIntern();
                managerMenu();
            }else {
                console.log("guess ill create some html")
                return
            }
        })
}

// program to prompt for manager details

    const init = () => {
        inquirer.prompt(managerQuestions)
            .then(mgrResponses => {
                let tmpMgr = new Manager(mgrResponses.managerName, mgrResponses.managerId, mgrResponses.managerEmail, mgrResponses.managerOffice)
                empArray.push(tmpMgr)
                managerMenu()
                    .then(() => {
                        console.log(empArray)
                    })
            })
    }



    //program for new engineer

    //program for new intern

    // program to create webpage



    // run program area

    init()