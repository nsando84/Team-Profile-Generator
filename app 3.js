const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const { runNewManager } = require("./promptLib/newManager")
const { runNewEngineer } = require("./promptLib/newEngineer")
const { runNewIntern } = require("./promptLib/newIntern")
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { inherits } = require("util");


const EmployeeArr = []

    addEmployee = (newManager) => {
        
        EmployeeArr.push(newManager)
    }
// ////////////////// RUN START PROGRAM ////////////////////    

    init = () => {
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "intChoice",
                    message: "What would you like to do?",
                    choices: [
                        "Create new employee",
                        "Check current employees",
                        "Exit"
                    ]
                }
             ])
            .then(intChoice => {
                switch (intChoice.intChoice) {
                    case "Exit":
                        runExit()
                        break;
                    case "Create new employee":
                        runNewEmployee()
                        break;
                    case "Check current employees":
                        runCheckEmployee()
                        // console.log(EmployeeArr)
                        break;
                    default:
                }   
            })
            .catch(function(err) {
                console.error(err);
            });
        
        
    }


////////////////// RUN EXIT PROGRAM ////////////////////

    runExit = () => {
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
                switch (byeChoice.byeChoice) {
                    case "Yes":
                        console.log("GoodBye")
                        process.exit(0) 
                    default:
                        init() 
                }     
            })
            .catch(function(err) {
                console.error(err);
            });
    }  
    
//////////////////// CREATE NEW EMPLOYEE ////////////////////

    runNewEmployee = () => {
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
                        runNewManager()
                        break;
                    case "Engineer":
                        runNewEngineer()
                        break;
                    case "Intern":
                        runNewIntern()
                        break;
                    default:
                        init()
                }     
            })
            .catch(function(err) {
                console.error(err);
            });
    }  

//////////////////// Check EMPLOYEES ////////////////////

    checkEmployeeChoices = () => {
        EmployeeArr.length === 0 ? console.log("\x1b[31m","No employees") : console.log(EmployeeArr)
    }
   
    

    deleteEmployee = () => {
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "Pick employee to delete",
                    name: "deleteEmployee",
                    choices: [
                        ...EmployeeArr,
                        "<<<- Go back"
                    ]
                }
            ]).then(deleteEmployee => {
                switch (deleteEmployee.deleteEmployee) {
                    case "<<<- Go back":
                        runCheckEmployee()
                        break;
                    default:
                        let deleteChoice = deleteEmployee.deleteEmployee
                        
                        EmployeeArr.forEach(function(e, i) {
                            if (e.name === deleteChoice) {
                                
                            }
                        })
                    
                    
                    init()
                }
            })
    }

    runCheckEmployee = () => {
        inquirer
            .prompt([
                {
                type: "list",
                message: "Current Employees",
                name: "currentEmployee",
                choices: [
                    "Check employees",
                    "Complete",
                    "Delete employee",
                    "<<<- Go back"
                    ]
                }
            ])
            .then(currentEmployee => {
                switch (currentEmployee.currentEmployee) {
                    case "<<<- Go back":
                        init()
                        break;
                    case "Check employees":
                        checkEmployeeChoices(),
                        init()
                        break;
                    case "Complete":
                        render(EmployeeArr)
                        break;
                    default:    
                        deleteEmployee()
                }
            })
            .catch(function(err) {
                console.error(err);
            }); 
    }


//////////////// Starter FUNCTION ////////////////////

init()






