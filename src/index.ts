import * as p from './problems';
import { quizzes } from './problems/quizzes';
import inquirer = require('inquirer');

async function prontDisplay(op: number): Promise<void> {
  console.clear();

  switch (+op) {
    case 1:
      console.log(quizzes.get(1).title);
      console.log(quizzes.get(1).problem);
      new p.P001().solved();
      break;
    case 2:
      new p.P002().solved();
      break;
    case 3:
      new p.P003().solved();
      break;
    case 4:
      new p.P004().solved();
      break;
    case 5:
      new p.P005().solved();
      break;
    case 6:
      new p.P006().solved();
      break;
    case 7:
      new p.P007().solved();
      break;
    case 8:
      new p.P008().solved();
      break;
    default:
      console.log('no found');
  }

  const answers = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Please input the other problem number:'
  });
  if (answers['add'] !== '') {
    if (answers['add'] == '0') {
      prontMain();
    } else {
      prontDisplay(answers['add']);
    }
  }
}

async function prontMain(): Promise<void> {
  console.clear();
  console.log(quizzes.get(0).problem);
  const answers = await inquirer.prompt({
    type: 'input',
    name: 'add',
    message: 'Please input the  problem number:'
  });

  if (answers['add'] !== '') {
    prontDisplay(answers['add']);
  }
}

prontMain();
