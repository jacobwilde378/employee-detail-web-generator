const CreateHTML = require('./utils/CreateHTML')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const fs = require('fs')
const inquirer = require('inquirer')

console.log("i'm running")

empArray = []

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
        message: 'Please enter the manager office number:  '
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
function buildFile(htmlText) {
    fs.writeFile('./dist/index.html', htmlText, err =>{
        if (err) throw err;
        console.log("Your File has been created!")
    })
}

const addEngineer = () => {
    inquirer.prompt(engineerQuestions)
        .then(engResponses => {
            let tmpEng = new Engineer(engResponses.engineerName, engResponses.engineerId, engResponses.engineerEmail, engResponses.engineerGit);
            empArray.push(tmpEng);
            managerMenu();
        })
}

const addIntern = () => {
    inquirer.prompt(internQuestions)
        .then(intResponses => {
            let tmpInt = new Intern(intResponses.internName, intResponses.internId, intResponses.internEmail, intResponses.internSchool);
            empArray.push(tmpInt);
            managerMenu();
        })
}

//build html stuff
const buildHtml = () => {
    let htmlData = CreateHTML(empArray)
    buildFile(htmlData);
}


//manager menu
const managerMenu = () => {
    inquirer.prompt(managerOptions)
        .then(managerSelectionResponse => {
            if (managerSelectionResponse.managerSelection === "Add an Engineer") {
                addEngineer();
            } else if (managerSelectionResponse.managerSelection === "Add an Intern") {
                addIntern();
            } else {
                buildHtml();
            }
        })
}

const init = () => {
    inquirer.prompt(managerQuestions)
        .then(mgrResponses => {
            let tmpMgr = new Manager(mgrResponses.managerName, mgrResponses.managerId, mgrResponses.managerEmail, mgrResponses.managerOffice)
            empArray.push(tmpMgr)
            managerMenu()
        })
}

init()