const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./page-temp");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const teamMembers = [];

const promtManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerAdd",
        message: "What is the managers name? (Required)",
        validate: (managerAdd) => {
          if (managerAdd) {
            return true;
          } else {
            console.log("Please enter the Managers name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the managers employee ID? (Required)",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter a valid ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the managers E-mail? (Required)",
        validate: (managerEmail) => {
          if (managerEmail) {
            return true;
          } else {
            console.log("Please enter the Managers E-mail!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerOffice",
        message: "What is the managers office number? (Required)",
        validate: (managerOffice) => {
          if (managerOffice) {
            return true;
          } else {
            console.log("Please enter the Managers office number!");
            return false;
          }
        },
      },
    ])
    .then(answers => {
      console.log(answers);
      const manager = new Manager(
        answers.managerAdd,
        answers.managerId,
        answers.managerEmail,
        answers.managerOffice
      );
      teamMembers.push(manager);
      promptTeamBuild();
    });
};

const promptTeamBuild = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "memberType",
        message: "What is the new team members job title",
        choices: [
          "Add a new Engineer to your team",
          "Add a new Intern to your team",
          "Finish and Build my Team",
        ],
      },
    ])
    .then((userType) => {
      switch (userType.memberType) {
        case "Add a new Engineer to your team":
          promptEngineer();
          break;
        case "Add a new Intern to your team":
          promptIntern();
          break;
        default:
          buildTeam();
      }
    });
};

const promptEngineer = () => {
  console.log(`
=========================
Please add a new Engineer
=========================
`);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Add an engineer name here! (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "id",
        message: "Add an emgineer ID number here! (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter an ID number!");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "email",
        message: "Add an engineer E-mail here! (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter an E-mail!");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "github",
        message: "Add an engineer GitHub here! (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter an GitHub!");
            return false;
          }
        },
      },
    ])
    .then(answers => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      promptTeamBuild();
    });
};

const promptIntern = () => {
  console.log(`
=======================
Please add a new Intern
=======================
`);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Add an intern name here! (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "id",
        message: "Add an intern ID number here! (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter a ID number!");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "email",
        message: "Add an intern E-mail here! (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter a E-mail!");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "school",
        message: "Add an intern school here! (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter a school!");
            return false;
          }
        },
      },
    ])
    .then(answers => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      promptTeamBuild();
    });
};

const buildTeam = () => {
  console.log(`
  =========================
  Finished Building my Team
  =========================
  `); 


  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, generatePage(teamMembers), "utf-8");
  console.log(
    "Page created! Check out index.html in this directory to see it!"
  );
};

promtManager();
