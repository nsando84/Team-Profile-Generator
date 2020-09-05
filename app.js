// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");
// const { inherits } = require("util");


class Mainloop {
    constructor() {
        
    }
    init() {
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "intChoice",
                    message: "What would you like to do?",
                    choices: [
                        "Create new employee",
                        "exit"
                    ]
                }
             ])
            .then(intChoice => {
                intChoice.intChoice === "exit" ? this.runExit() : this.runNewEmployee()
            })
            .catch(function(err) {
                console.error(err);
            });
    }


////////////////// RUN EXIT PROGRAM ////////////////////

    runExit() {
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "byeChoice",
                    message: "Are you sure you want to exit?",
                    choices: [
                        "Yes",
                        "No"
                    ]
                }
            ])
            .then(byeChoice => {
                if (byeChoice.byeChoice === "Yes") { 
                    console.log("GoodBye")
                    process.exit(0) 
                } else { 
                    this.init() 
                }     
            })
            .catch(function(err) {
                console.error(err);
            });
    }  
    
////////////////// CREATE NEW EMPLOYEE ////////////////////

    runNewEmployee() {
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "employeeChoice",
                    message: "Employee position",
                    choices: [
                        "Manager",
                        "Engineer",
                        "Intern",
                        "<<<- Go back"
                    ]
                }
            ])
            .then(employeeChoice => {
                switch (employeeChoice.employeeChoice) { 
                    case "Manager":
                        console.log("manager")
                        break;
                    case "Engineer":
                        console.log("Engineer")
                        break;
                    case "Intern":
                        console.log("Intern")
                        break;
                    default:
                        this.init()
                }     
            })
            .catch(function(err) {
                console.error(err);
            });
    }  
}


const newInit = new Mainloop;
newInit.init()
// console.log(init.runExit())