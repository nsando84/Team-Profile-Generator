const inquirer = require("inquirer");
const Engineer = require("../lib/Engineer");


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
                inquirer
                    .prompt([
                        {
                        type: "list",
                        name: "engineerFinalChoice",
                        message: `Want to finishing adding engineer - ${engineerChoice.engineerName}`,
                        choices: [
                        "Yes",
                        "<<<- Go back"
                        ]
                        }    
                    ])
                    .then(engineerFinalChoice => {
                        if (engineerFinalChoice.engineerFinalChoice === "Yes") { 
                            const newEngineer = new Engineer(engineerChoice.engineerId, engineerChoice.engineerName, engineerChoice.engineerEmail, engineerChoice.engineerGithub)
                            addEmployee(newEngineer)
                            init()
                        } else { 
                            runNewEmployee()
                        }     
                    })
                    .catch(function(err) {
                        console.error(err);
                    });
                    
            })     
            .catch(function(err) {
                console.error(err);
            });
        }


module.exports = {runNewEngineer: runNewEngineer}