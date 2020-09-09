const inquirer = require("inquirer");
const Manager = require("../lib/Manager");
const authenticator = require("./authenticator")



runNewManager = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "managerId",
                message: "Employee's ID"
                
            },
            {
                type: "input",
                name: "managerName",
                message: "Employee's name"
                
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Employee's email"
                
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Office Number"
                
            }
        ])
        .then(managerChoice => {
            if (authenticator(managerChoice) === true) {
                inquirer
                    .prompt([
                        {
                        type: "list",
                        name: "managerFinalChoice",
                        message: `Want to finishing adding Manager - ${managerChoice.managerName}`,
                        choices: [
                        "Yes",
                        new inquirer.Separator(),
                        "<<<- Go back"
                        ]
                        }    
                    ])
                    .then(managerFinalChoice => {
                        switch (managerFinalChoice.managerFinalChoice) { 
                            case "Yes":
                            console.log("\x1b[32m", `Added: Manager - ${managerChoice.managerName}`)    
                            const newManager = new Manager(managerChoice.managerId, managerChoice.managerName, managerChoice.managerEmail, managerChoice.managerOfficeNumber)
                            addEmployee(newManager)
                            init()
                            break;
                            default:
                            runNewEmployee()
                        }     
                    })
                    .catch(function(err) {
                        console.error(err);
                    });
            } else {
                runNewEmployee()
                }   
            })     
            .catch(function(err) {
                console.error(err);
            });
            
        }




    


module.exports = {
    runNewManager: runNewManager,
}