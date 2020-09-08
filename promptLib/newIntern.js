const inquirer = require("inquirer");
const Intern = require("../lib/Intern");



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
                inquirer
                    .prompt([
                        {
                        type: "list",
                        name: "internFinalChoice",
                        message: `Want to finishing adding intern - ${internChoice.internName}`,
                        choices: [
                        "Yes",
                        "<<<- Go back"
                        ]
                        }    
                    ])
                    .then(internFinalChoice => {
                        if (internFinalChoice.internFinalChoice === "Yes") { 
                            const newIntern = new Intern(internChoice.internId, internChoice.internName, internChoice.internEmail, internChoice.internSchool)
                            addEmployee(newIntern)
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
    


module.exports = {runNewIntern: runNewIntern}