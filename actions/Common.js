const inquirer = require("inquirer");
const fs = require("fs");
const path = "book.json";
function read() {
  let data_add = fs.readFileSync(path);
  return JSON.parse(data_add);
}
function write(array) {
  let newData2 = JSON.stringify(array);
  fs.writeFile(path, newData2, (err) => {
    if (err) throw err;
  });
}
function questions(massage1, massage2) {
  const inquirerquestion = [
    {
      name: "name",
      type: "input",
      message: massage1,
    },
    {
      name: "phone",
      type: "input",
      message: massage2,
    },
  ];
  return inquirer.prompt(inquirerquestion);
}
async function findItem(
  inquirerResult,
  onResultFoundCallBack,
  findvalue,
  onResultNotFoundCallBack
) {
  let myObject = read();
  let result = myObject.find(findvalue);
  if (result !== undefined) {
    onResultFoundCallBack(result, inquirerResult, myObject);
  } else {
    onResultNotFoundCallBack(result);
  }
}
async function fileExists(inquirerResult, truefun, falsefunc) {
  let array = [];
  let exsist = fs.existsSync(path);
  return exsist ? truefun(inquirerResult) : falsefunc(array, inquirerResult);
}
module.exports = { read, write, findItem, questions, fileExists };
