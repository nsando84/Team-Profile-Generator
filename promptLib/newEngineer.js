const inquirer = require("inquirer");
const Engineer = require("../lib/Engineer");
const authenticator = require("./authenticator")

    runNewEngineer = () => {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "engineerId",
                    message: "Employee's ID"
                    
                },
                {
                    type: "input",
                    name: "engineerName",
                    message: "Employee's name"
                    
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "Employee's email"
                    
                },
                {
                    type: "input",
                    name: "engineerGithub",
                    message: "Github username"
                    
                }
            ])
            .then(engineerChoice => {
                if (authenticator(engineerChoice) === true) {
                    inquirer
                        .prompt([
                            {
                            type: "list",
                            name: "engineerFinalChoice",
                            message: `Want to finishing adding Engineer - ${engineerChoice.engineerName}`,
                            choices: [
                            "Yes",
                            new inquirer.Separator(),
                            "<<<- Go back"
                            ]
                            }    
                        ])
                        .then(engineerFinalChoice => {
                            switch (engineerFinalChoice.engineerFinalChoice) { 
                                case "Yes":
                                const newEngineer = new Engineer(engineerChoice.engineerId, engineerChoice.engineerName, engineerChoice.engineerEmail, engineerChoice.engineerGithub)
                                addEmployee(newEngineer)
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


module.exports = {runNewEngineer: runNewEngineer}