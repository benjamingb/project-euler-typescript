import { range } from './utils';
import { lcm } from 'mathjs';
import { showResults } from './solved';

/**
 * Problem 5
 *
 * Smallest multiple
 *
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 *
 */
export class P005 {
  readonly problemName = 'P0005 - Small Multiple';

  solution1 = (limit: number): number => {
    return [...range(1, limit)].reduce(
      (result, val) => (result = lcm(result, val))
    );
  };

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

    showResults(this.problemName, solutions);
  };
}
