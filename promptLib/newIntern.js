const inquirer = require("inquirer");
const Intern = require("../lib/Intern");
const authenticator = require("./authenticator")


    runNewIntern = () => {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "internId",
                    message: "Employee's ID"
                    
                },
                {
                    type: "input",
                    name: "internName",
                    message: "Employee's name"
                    
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "Employee's email"
                    
                },
                {
                    type: "input",
                    name: "internSchool",
                    message: "Current university"
                    
                }
            ])
            .then(internChoice => {
                if (authenticator(internChoice) === true) {
                    inquirer
                        .prompt([
                            {
                            type: "list",
                            name: "internFinalChoice",
                            message: `Want to finishing adding Intern - ${internChoice.internName}`,
                            choices: [
                            "Yes",
                            new inquirer.Separator(),
                            "<<<- Go back"
                            ]
                            }    
                        ])
                        .then(internFinalChoice => {
                            switch (internFinalChoice.internFinalChoice) { 
                                case "Yes":
                                const newIntern = new Intern(internChoice.internId, internChoice.internName, internChoice.internEmail, internChoice.internSchool)
                                addEmployee(newIntern)
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
    


module.exports = {runNewIntern: runNewIntern}