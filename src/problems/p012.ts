import { showResults } from './solved';
import { genPrime } from './utils';

/**
 * Problem 12
 *
 * Highly divisible triangular number
 *
 */

export class P012 {
  readonly problemName = 'P0012';

  solution1 = (limit: number): number => {
    let number = 0;
    let n = 1;
    while (number === 0) {
      let count = 0;
      const trinum = (n * (n + 1)) / 2;

      for (let i = 1; i <= Math.sqrt(trinum); i++) {
        if (trinum % i === 0) {
          //finds multiples, if a multiple is found and it is less than the
          count += 2; //square root then there is a another one greater than the root
        }
      }

      if (count > limit) {
        number = trinum;
        break;
      }

      n += 1;
      //console.log(count, trinum, n);
    }
    return number;
  };

  solved = () => {
    const limit = 500;

    const solutions = [this.solution1(limit)];

    showResults(this.problemName + limit, solutions);
  };
}
