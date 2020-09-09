const inquirer = require("inquirer");
const { runNewEmployee } = require("./promptLib/employeeSetup")
const { runCheckEmployee } = require("./promptLib/employeeSetup")



    init = () => {
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "intChoice",
                    message: "What would you like to do?",
                    choices: [
                        "Create new employee",
                        "Employee options",
                        new inquirer.Separator(),
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
                    case "Employee options":
                        runCheckEmployee()
                        break;
                    default:
                }   
            })
            .catch(function(err) {
                console.error(err);
            });
        
        
    }

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
                        console.log("Goodbye")
                        process.exit(0) 
                    default:
                        init() 
                }     
            })
            .catch(function(err) {
                console.error(err);
            });
    }  
    

init()

module.exports = {
    init: init,
    runExit: runExit
}






