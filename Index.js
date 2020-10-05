const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const fs = require('fs')
const inquirer = require('inquirer')

console.log("i'm running")

let manager = new Manager("Jacob", 378, "jacob.wilde@utah.edu", "Verona");

let engineer = new Engineer("Troy", "C32", "troy.berry@cypruscu.com", "tberry")

let intern = new Intern("Geo", "E46", "geoff.dutson@cypruscu.com", "University of Utah")

//let test = new Employee("Jacob", 378, "jacob.wilde@utah.edu")

console.log(manager)

console.log(engineer)

console.log(intern)
