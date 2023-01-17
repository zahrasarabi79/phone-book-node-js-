// // Importing the module
// const readline = require("readline-sync");
// const fs = require("fs");
// const { hkdf } = require("crypto");

// // Enter the number
// let answer1 = readline.question("name:");
// let answer2 = readline.question("phone:");
// let data = { name: answer1, phone: answer2 };
// let array = [];

// let fileExists = fs.existsSync("book.json");
// if (!fileExists) {
//   array.push(data);
//   console.log("Creating the file");
//   read_data = JSON.stringify(array);
//   fs.writeFileSync("book.json", read_data);
// } else {
//   let data_add = fs.readFileSync("book.json");
//   let myObject = JSON.parse(data_add);
//   const result = myObject.find(({ name }) => {
//     return name === answer1;
//   });
//   let deletedItem = myObject.findIndex(({ name }) => {
//     return name === answer1;
//   });
//   console.log(deletedItem);
//   if (result !== undefined) {
//     if (result.phone !== answer2) {
//       result.phone = answer2;
//       let newData2 = JSON.stringify(myObject);
//       fs.writeFile("book.json", newData2, (err) => {
//         if (err) throw err;
//         console.log("updat data");
//       });
//     } else {
//       let answer3 = readline.question(
//         "do you want to delete this number(y/n)?"
//       );
//       if (answer3 == "y") {
//         myObject.splice(deletedItem, 1);
//         console.log(myObject);
//         let newData2 = JSON.stringify(myObject);
//         fs.writeFile("book.json", newData2, (err) => {
//           if (err) throw err;
//           console.log("data deleted");
//         });
//       } else {
//         console.log("same");
//       }
//     }
//   } else {
//     console.log("add");
//     myObject.push(data);
//     let newData2 = JSON.stringify(myObject);
//     fs.writeFile("book.json", newData2, (err) => {
//       if (err) throw err;
//       console.log("New data added");
//     });
//   }
// }

//add list

const readline = require("readline-sync");
const fs = require("fs");
const inquirer = require("inquirer");



inquirer
  .prompt([
    {
      name: "phonebook",
      type: "list",
      message: "what do you want?",
      choices: ["add number", "updat number", "updat name", "delete number"],
    },
  ])
  .then((answer) => {
    if (answer.phonebook == "add number") {
      inquirer
        .prompt([
          {
            name: "first_name",
            type: "input",
            message: "What is your first name?",
          },
          {
            name: "phone",
            type: "input",
            message: "What is your phone?",
          },
        ])
        .then((answer) => {
          let data = { name: answer.first_name, phone: answer.phone };
          let array = [];
          let fileExists = fs.existsSync("book.json");
          if (!fileExists) {
            array.push(data);
            read_data = JSON.stringify(array);
            fs.writeFileSync("book.json", read_data);
            console.log("Creating the file");
          } else {
            let data_add = fs.readFileSync("book.json");
            let myObject = JSON.parse(data_add);
            const result = myObject.find(({ name }) => {
              return name === answer.first_name;
            });
            if (result !== undefined) {
              console.log("phone has already existed");
            } else {
              let data_add = fs.readFileSync("book.json");
              let myObject = JSON.parse(data_add);
              myObject.push(data);
              let newData2 = JSON.stringify(myObject);
              fs.writeFile("book.json", newData2, (err) => {
                if (err) throw err;
                console.log("New data added");
              });
            }
          }
        });
    }
    if (answer.phonebook == "updat number") {
      inquirer
        .prompt([
          {
            name: "first_name",
            type: "input",
            message: "What is your name?",
          },
          {
            name: "phone",
            type: "input",
            message: "write a new unumber for this number:",
          },
        ])
        .then((answer) => {
          let data_add = fs.readFileSync("book.json");
          let myObject = JSON.parse(data_add);
          const result = myObject.find(({ name }) => {
            return name === answer.first_name;
          });
          if (result !== undefined) {
            if (result.phone !== answer.phone) {
              result.phone = answer.phone;
              let newData2 = JSON.stringify(myObject);
              fs.writeFile("book.json", newData2, (err) => {
                if (err) throw err;
                console.log("updat data");
              });
            } else {
              console.log("phone has already existed");
            }
          }
        });
    }
    if (answer.phonebook == "updat name") {
      inquirer
        .prompt([
          {
            name: "phone",
            type: "input",
            message: "What is your previous number?",
          },
          {
            name: "first_name",
            type: "input",
            message: "write a new name for this number:",
          },
        ])
        .then((answer) => {
          let data_add = fs.readFileSync("book.json");
          let myObject = JSON.parse(data_add);
          const result = myObject.find(({ phone }) => {
            return phone === answer.phone;
          });
          if (result !== undefined) {
            if (result.name !== answer.first_name) {
              result.name = answer.first_name;
              let newData2 = JSON.stringify(myObject);
              fs.writeFile("book.json", newData2, (err) => {
                if (err) throw err;
                console.log("updat data");
              });
            } else {
              console.log("phone has already existed");
            }
          }
        });
    }
    if (answer.phonebook == "delete number") {
      inquirer
        .prompt([
          {
            name: "name",
            type: "input",
            message: "What is your name?",
          },
          {
            name: "phone",
            type: "input",
            message: "What is your number?",
          },
        ])
        .then((answer) => {
          inquirer
            .prompt([
              {
                name: "delete",
                type: "confirm",
                message: "Do you want to delete this person?",
              },
            ])
            .then((answer) => {
              if (answer.delete == true) {
                console.log("delete");
                let data_add = fs.readFileSync("book.json");
                let myObject = JSON.parse(data_add);
                let deletedItem = myObject.findIndex(({ name }) => {
                  return name === answer.name;
                });
                myObject.splice(deletedItem, 1);
                let newData2 = JSON.stringify(myObject);
                fs.writeFile("book.json", newData2, (err) => {
                  if (err) throw err;
                  console.log("data deleted");
                });
              } else {
                console.log(answer.delete);
              }
            });
        });
    }
  });
// nasb npm install --save inquirer@^8.0.0
// npm install inquirer
