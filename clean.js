const inquirer = require("inquirer");
const add = require("./actions/add");
const deleted = require("./actions/delete");
const updatename = require("./actions/updateName");
const updatNumber = require("./actions/updateNumber");
async function phonebook() {
  const inquirerOptions = [
    {
      name: "phonebook",
      type: "list",
      message: "what do you want?",
      choices: ["add number", "updat number", "updat name", "delete number"],
    },
  ];

  let inquirerResult = await inquirer.prompt(inquirerOptions);

  if (inquirerResult.phonebook == "add number") {
     await add();
  }
  if (inquirerResult.phonebook == "updat number") {
    await updatNumber();
  }
  if (inquirerResult.phonebook == "updat name") {
    await updatename();
  }
  if (inquirerResult.phonebook == "delete number") {
    await deleted();
  }
}
phonebook();
