const inquirer = require("inquirer");
const common = require("./Common");
const dataQuestions = async () =>
  confirmDelete(
    await common.questions("what is your name?", "what is your phone?")
  );
async function confirmDelete(data) {
  const deleteQuestion = [
    {
      name: "delete",
      type: "confirm",
      message: "Do you want to delete this person?",
    },
  ];
  return selectConfirm(await inquirer.prompt(deleteQuestion),data);
}
async function selectConfirm(ResultOfquestionDelete, data) {
  return ResultOfquestionDelete.delete
    ? deleted(data)
    : console.log("Delete contact canceled");
}
async function deleted(data) {
  let myObject = common.read();
  myObject.splice(await findItem(data, myObject), 1);
  common.write(myObject);
  console.log("deleted");
}
async function findItem(data, myObject) {
  return myObject.findIndex(({ name }) => name === data.name);
}
module.exports = dataQuestions;
