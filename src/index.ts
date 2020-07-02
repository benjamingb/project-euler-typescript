import * as p from "./problems";
import { quizzes } from "./problems/quizzes";
import inquirer = require("inquirer");

async function prontDisplay(op: number): Promise<void> {
  console.clear();
  console.log(quizzes[0].p1.title);
  //11console.log(quizzes[0].p1.problem);

  switch (+op) {
    case 1:
      new p.P001().solved();
      break;
    case 2:
      new p.P002().solved();
      break
    case 3:
      new p.P003().solved();
      break
    default:
      console.log("no found");
  }



  const answers = await inquirer.prompt({
    type: "input",
    name: "add",
    message: "Please input the other problem number:",
  });
  if (answers["add"] !== "") {
    if (answers["add"] == "0") {
      prontMain();
    } else {
      prontDisplay(answers["add"]);
    }
  }
}

async function prontMain(): Promise<void> {
  console.clear();
  console.log(quizzes[0].p0.title);
  console.log(quizzes[0].p0.problem);
  const answers = await inquirer.prompt({
    type: "input",
    name: "add",
    message: "Please input the  problem number:",
  });

  if (answers["add"] !== "") {
    prontDisplay(answers["add"]);
  }
}

prontMain();
