const common = require("./Common");
const dataQuestions= async () =>
  common.fileExists(
    await common.questions("what is your name?", "what is your phone?"),
    add,
    creat
  );
async function add(data) {
  common.findItem(
    data,
    () => console.log("name has already existed"),
    ({ name }) => name === data.name,
    () => addNew(data)
  );
}

async function addNew(data) {
  creat(common.read(), data, "New data added");
}
async function creat(
  array,
  data,
  message = "creat new file & data add to file"
) {
  array.push(data);
  common.write(array);
  return console.log(message);
}
module.exports = dataQuestions;
