// lib folder CLASSES

// in your lib folder youre going to put your classes Employee being the parent class
// Intern, Engineer, Manager all being extended classes of Employee
// these 3 classes are going to be borrowing properties and methods from the Employee class

// INDEX.JS - inquirer flow

// youre going to need to require all the classes from the lib folder
// were going to be using inquirer npmjs.com/inquirer

// application is going to be used by the Manager
// so when app is initialized we will be firing off inquirer to ask Manager questions
// after all questions are asked we want to create a "new Manager" with responses from inquirer and push that manager into an empty team array
// after "new Manager" is pushed you will fire off a single inquirer question asking the user what they want to do next (add engineer, add intern, i dont want to add anymore team members)

// IF they choose 'add engineer' fire off the engineer questions and follow the manager flow
// IF they choose 'add intern' fire off the intern questions and follow the manager flow


// BUILD TEAM FUNCTION

// IF they choose "i dont want to add anymore team members" then were going to take the entire team array write it to a file (team.html)
// to do that were going to need to create a directory or "folder" that wil dynamically be made as well as the file (team.html)
// youre going to be using the "fs" file system to write the file
// referencing README generator pass your team array to the "template.js" in your src folder.

// template.js in SRC folder

// in this file have a function (generateTeam) that takes the whole team and inside of that function youre going to have three different functions that will render the specific job title

// the flow here is split the whole team up based upon their job title (engineer, intern, manager) send them to there respective function (generateManager, generateIntern, generateEngineer),
// and then bring them all back together but now in their templated format and send to html.

// team from index.js (engineers, interns, managers)
// *filter* through the team and if their job title is "manager" send them to generateManager function etc etc ** loo up .filter, .map methods

// ***** i think the filter part is the toughest part of the whole app

// generateManager should use template literals to create a bootstrap card and you want to call all the methods from the Manager class to display the specific answers from inquirer (manager.getRole, getId, getEmail, getName)

// after each job title is templated in its bootstrap card *.join() them all back together in an empty array and return that.

// in your module.exports create a whole html template using template literals and call generateTeam with the team inside of it.

