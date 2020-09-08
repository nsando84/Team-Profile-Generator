const inquirer = require("inquirer");
const { runNewManager } = require("./newManager")
const { runNewEngineer } = require("./newEngineer")
const { runNewIntern } = require("./newIntern")
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "../output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("../lib/htmlRenderer");
const { inherits } = require("util");

const EmployeeArr = []

    addEmployee = (newManager) => {
        EmployeeArr.push(newManager)
    }

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
                                console.log("\x1b[33m", `${e.name} has been deleted`)
                                EmployeeArr.splice(i, 1)
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
                    "Delete employee",
                    "Complete procress",
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
                    case "Complete procress":
                        runEmployeeComplete()
                        break;
                    default:    
                        deleteEmployee()
                }
            })
            .catch(function(err) {
                console.error(err);
            }); 
    }



    runEmployeeComplete = () => {
        let htmlFile = render(EmployeeArr)
        // outputPath
        fs.writeFile(outputPath, htmlFile, function(err) {

            if (err) {
              return console.log(err);
            }
          
            console.log("Success!");
          
          });
        // console.log(render(EmployeeArr)) 
    }

module.exports = {
    runCheckEmployee: runCheckEmployee,
    runNewEmployee: runNewEmployee
}