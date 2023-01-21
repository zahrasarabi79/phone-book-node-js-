const common = require("./Common");
const dataQuestions = async () =>
  findNumber(
    await common.questions("What is your previous name?", "write a new number ")
  );
async function findNumber(data) {
  common.findItem(
    data,
    update,
    ({ name }) => name ===data.name,
    () => console.log("name dose not existed")
  );
}
function update(result,data, myObject) {
  if (result.phone !== data.phone) {
    result.phone =data.phone;
    common.write(myObject);
    console.log("updat number");
  } else {
    console.log("phone has already existed");
  }
}
module.exports =dataQuestions;
