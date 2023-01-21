const common = require("./Common");
const dataQuestions = async () =>
  findName(
    await common.questions(
      "write a new name for previous number:",
      "What is your previous number?"
    )
  );

async function findName(data) {
  common.findItem(
    data,
    update,
    ({ phone }) => phone ===data.phone,
    () => console.log("phone dose not existed")
  );
}
function update(result, data, myObject) {
  if (result.name !== data.name) {
    result.name = data.name;
    common.write(myObject);
    return console.log("updated");
  } else {
    console.log("phone has already existed");
  }
}
module.exports = dataQuestions;
