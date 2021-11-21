import { range } from './utils';
import { lcm } from 'mathjs';
import { displaySolutions } from './solved';

export class P005 {
  readonly problemName = 'Small Multiple';

  solution1 = (limit: number): number => {
    return [...range(1, limit)].reduce(
      (result, val) => (result = lcm(result, val))
    );
  };

  //using only iterators
  solution2 = (limit: number): number => {
    let isFound = false;
    let currNumber = 0;

    while (!isFound) {
      // Add itself if it's not divisible
      currNumber += limit;

      for (let i = limit; i >= 1; i--) {
        // if currNumber is not divisible by numbers in range, break out of forloop
        if (currNumber % i !== 0) break;

        // currNumber is divisible by all numbers down to 1!
        if (i === 1) isFound = true;
      }
    }
    return currNumber;
  };

  solved = () => {
    const limit = 20;

    const solutions = [this.solution1(limit), this.solution2(limit)];
    console.log(this.problemName);
    console.table(displaySolutions(solutions));
  };
}

function* evenNumber() {
  let value = 2;
  while (true) {
    yield value;
    console.log('-', { value });
    //value += value % 2 ? 1 : 2;
    if (!(value % 2)) {
      console.log('xx', value);
      value += 2;
      console.log('a', value);
    }
  }
}
