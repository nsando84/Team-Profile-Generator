const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { inherits } = require("util");

let testArr = [
    {"ID": "15", "Name": "Joe", "Email": "Email@Aol.com", "OfficeNumber": "22"},
    {"ID": "16", "Name": "tom", "Email": "Email@yahoo.com", "github": "tomgithub"},
    {"ID": "17", "Name": "doug", "Email": "Email@outlook.com", "github": "douggithub"},
    {"ID": "18", "Name": "bill", "Email": "Email@gmail.com", "School": "Sierra"}
]
render(testArr)
const EmployeeArr = []

// class Mainloop {
//     constructor() {
        
//     }
// ////////////////// RUN START PROGRAM ////////////////////    

//     init() {
//         inquirer
//             .prompt([
//                 {
//                     type: "list",
//                     name: "intChoice",
//                     message: "What would you like to do?",
//                     choices: [
//                         "Create new employee",
//                         "Check current employees",
//                         "Exit"
//                     ]
//                 }
//              ])
//             .then(intChoice => {
//                 switch (intChoice.intChoice) {
//                     case "Exit":
//                         this.runExit()
//                         break;
//                     case "Create new employee":
//                         this.runNewEmployee()
//                         break;
//                     case "Check current employees":
//                         // console.log("hi")
//                         this.runCheckEmployee()
//                         // console.log(EmployeeArr)
//                         break;
//                     default:
//                 }   
//             })
//             .catch(function(err) {
//                 console.error(err);
//             });
//     }


// ////////////////// RUN EXIT PROGRAM ////////////////////

//     runExit() {
//         inquirer
//             .prompt([
//                 {
//                     type: "list",
//                     name: "byeChoice",
//                     message: "Are you sure you want to exit?",
//                     choices: [
//                         "Yes",
//                         "No"
//                     ]
//                 }
//             ])
//             .then(byeChoice => {
//                 if (byeChoice.byeChoice === "Yes") { 
//                     console.log("GoodBye")
//                     process.exit(0) 
//                 } else { 
//                     this.init() 
//                 }     
//             })
//             .catch(function(err) {
//                 console.error(err);
//             });
//     }  
    
// ////////////////// CREATE NEW EMPLOYEE ////////////////////

//     runNewEmployee() {
//         inquirer
//             .prompt([
//                 {
//                     type: "list",
//                     name: "employeeChoice",
//                     message: "Employee position",
//                     choices: [
//                         "Manager",
//                         "Engineer",
//                         "Intern",
//                         "<<<- Go back"
//                     ]
//                 }
//             ])
//             .then(employeeChoice => {
//                 switch (employeeChoice.employeeChoice) { 
//                     case "Manager":
//                         this.runNewManager()
//                         // console.log("manager")
//                         break;
//                     case "Engineer":
//                         this.runNewEngineer()
//                         // console.log("Engineer")
//                         break;
//                     case "Intern":
//                         this.runNewIntern()
//                         // console.log("Intern")
//                         break;
//                     default:
//                         this.init()
//                 }     
//             })
//             .catch(function(err) {
//                 console.error(err);
//             });
//     }  
    
// ////////////////// CREATE NEW MANAGER ////////////////////

//     runNewManager() {
//         inquirer
//             .prompt([
//                 {
//                     type: "input",
//                     name: "managerId",
//                     message: "Employee's ID"
                    
//                 },
//                 {
//                     type: "input",
//                     name: "managerName",
//                     message: "Employee's name"
                    
//                 },
//                 {
//                     type: "input",
//                     name: "managerEmail",
//                     message: "Employee's email"
                    
//                 },
//                 {
//                     type: "input",
//                     name: "managerOfficeNumber",
//                     message: "Office Number"
                    
//                 }
//             ])
//             .then(managerChoice => {
//                 inquirer
//                     .prompt([
//                         {
//                         type: "list",
//                         name: "managerFinalChoice",
//                         message: `Want to finishing adding Manager - ${managerChoice.managerName}`,
//                         choices: [
//                         "Yes",
//                         "<<<- Go back"
//                         ]
//                         }    
//                     ])
//                     .then(managerFinalChoice => {
//                         if (managerFinalChoice.managerFinalChoice === "Yes") { 
//                             // console.log(managerChoice)
//                             const newManager = new Manager(managerChoice.managerId, managerChoice.managerName, managerChoice.managerEmail, managerChoice.managerOfficeNumber)
//                             EmployeeArr.push(newManager)
//                             // console.log(newManager)
//                             this.init()
//                         } else { 
//                             this.runNewEmployee()
//                         }     
//                     })
//                     .catch(function(err) {
//                         console.error(err);
//                     });
                    
//             })     
//             .catch(function(err) {
//                 console.error(err);
//             });
//         }

// ////////////////// CREATE NEW Engineer ////////////////////
    
//     runNewEngineer() {
//         inquirer
//             .prompt([
//                 {
//                     type: "input",
//                     name: "engineerId",
//                     message: "Employee's ID"
                    
//                 },
//                 {
//                     type: "input",
//                     name: "engineerName",
//                     message: "Employee's name"
                    
//                 },
//                 {
//                     type: "input",
//                     name: "engineerEmail",
//                     message: "Employee's email"
                    
//                 },
//                 {
//                     type: "input",
//                     name: "engineerGithub",
//                     message: "Github username"
                    
//                 }
//             ])
//             .then(engineerChoice => {
//                 inquirer
//                     .prompt([
//                         {
//                         type: "list",
//                         name: "engineerFinalChoice",
//                         message: `Want to finishing adding engineer - ${engineerChoice.engineerName}`,
//                         choices: [
//                         "Yes",
//                         "<<<- Go back"
//                         ]
//                         }    
//                     ])
//                     .then(engineerFinalChoice => {
//                         if (engineerFinalChoice.engineerFinalChoice === "Yes") { 
//                             // console.log(engineerChoice)
//                             const newEngineer = new Engineer(engineerChoice.engineerId, engineerChoice.engineerName, engineerChoice.engineerEmail, engineerChoice.engineerGithub)
//                             EmployeeArr.push(newEngineer)
//                             // console.log(newEngineer)
//                             this.init()
//                         } else { 
//                             this.runNewEmployee()
//                         }     
//                     })
//                     .catch(function(err) {
//                         console.error(err);
//                     });
                    
//             })     
//             .catch(function(err) {
//                 console.error(err);
//             });
//         }

// ////////////////// CREATE NEW Intern ////////////////////

    
//     runNewIntern() {
//         inquirer
//             .prompt([
//                 {
//                     type: "input",
//                     name: "internId",
//                     message: "Employee's ID"
                    
//                 },
//                 {
//                     type: "input",
//                     name: "internName",
//                     message: "Employee's name"
                    
//                 },
//                 {
//                     type: "input",
//                     name: "internEmail",
//                     message: "Employee's email"
                    
//                 },
//                 {
//                     type: "input",
//                     name: "internSchool",
//                     message: "Current university"
                    
//                 }
//             ])
//             .then(internChoice => {
//                 inquirer
//                     .prompt([
//                         {
//                         type: "list",
//                         name: "internFinalChoice",
//                         message: `Want to finishing adding intern - ${internChoice.internName}`,
//                         choices: [
//                         "Yes",
//                         "<<<- Go back"
//                         ]
//                         }    
//                     ])
//                     .then(internFinalChoice => {
//                         if (internFinalChoice.internFinalChoice === "Yes") { 
//                             // console.log(internChoice)
//                             const newIntern = new Intern(internChoice.internId, internChoice.internName, internChoice.internEmail, internChoice.internSchool)
//                             EmployeeArr.push(newIntern)
//                             // console.log(newIntern)
//                             this.init()
//                         } else { 
//                             this.runNewEmployee()
//                         }     
//                     })
//                     .catch(function(err) {
//                         console.error(err);
//                     });
                    
//             })     
//             .catch(function(err) {
//                 console.error(err);
//             });
//     }
    
//     checkEmployeeChoices() {
//         // console.log(EmployeeArr)
//         return EmployeeArr.length === 0 ? "No employees" : EmployeeArr
        
//     }
   

//     runCheckEmployee() {
//         inquirer
//             .prompt([
//                 {
//                 type: "list",
//                 message: "Current Employees",
//                 name: "currentEmployee",
//                 choices: [
//                     this.checkEmployeeChoices(),
//                     "Delete employee",
//                     "<<<- Go back"
//                     ]
//                 }
//             ])
//             .then(currentEmployee => {
//                 console.log(currentEmployee.currentEmployee)
//                 if (currentEmployee.currentEmployee === "<<<- Go back") {
//                     this.runNewEmployee()
//                 } 
//             })
//             .catch(function(err) {
//                 console.error(err);
//             }); 
//     }

    
    

// }
// console.log(testArr)
//////////////// Starter FUNCTION ////////////////////

// const newInit = new Mainloop;
// newInit.init()
// console.log(init.runExit())