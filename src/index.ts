import * as p from "./problems";
import { quizzes } from "./problems/quizzes";
import inquirer = require("inquirer");

async function prontDisplay(): Promise<void> {
  console.clear();
  console.log(quizzes[0].p1.title);
  console.log(quizzes[0].p1.problem);
  new p.P0001().solved();
  
  const answers = await inquirer.prompt({
    type: "input",
    name: "add",
    message: "Please input the other problem number:",
  });
  if (answers["add"] !== "") {
    if (answers["add"] == "0") {
      prontMain();
    }else{
        prontDisplay();
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
    prontDisplay();
  }
}

prontMain();
