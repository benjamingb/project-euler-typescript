import * as p from './problems';
import inquirer = require('inquirer');

type fun = () => void;
type solved = { [key: number | string]: fun };
let isFirst = true;

async function prontDisplay(op: string): Promise<void> {
  console.clear();

  const solution: solved = {
    1: (): void => new p.P001().solved(),
    2: (): void => new p.P002().solved(),
    3: (): void => new p.P003().solved(),
    4: (): void => new p.P004().solved(),
    5: (): void => new p.P005().solved(),
    6: (): void => new p.P006().solved(),
    7: (): void => new p.P007().solved(),
    8: (): void => new p.P008().solved(),
    default: (): void => console.log('no found')
  };

  (solution[Number(op)] || solution['default'])();

  await main();
}

async function prompt() {
  if (isFirst) {
    console.clear();
    console.log(`
    ...............................................
    Project euler problems resolved in TypeScript
           by Benjamin Gonzales B.
    ...............................................
      `);
    isFirst = false;
  }

  const answer = await inquirer.prompt({
    type: 'input',
    name: 'pn',
    message: 'Please input the  problem number:'
  });

  return answer.pn;
}

async function main() {
  const answer = await prompt();

  if (Number(answer) !== 0) {
    prontDisplay(answer);
    return;
  }
  await main();
}

main();
