const Employee = require('./Employee');

class Engineer extends Employee {

    constructor (name, id, email, git){
        super(name, id, email);
        this.git = git
        this.role = "Engineer"
    }
}
module.exports = Engineer