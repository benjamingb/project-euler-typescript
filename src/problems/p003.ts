import { showResults } from './solved';

/**
 * Problem 3
 *
 * Largest prime factor
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */
export class P003 {
  readonly problemName = 'P0003 - Largest prime factor of ';

  // using while
  solution1 = (limit: number): number => {
    let factor = 2;
    while (limit != factor) {
      if (limit % factor === 0) {
        limit /= factor;
        continue;
      }
      factor++;
    }
    return factor;
  };

  solution2 = (limit: number): number => {
    const largeFactor = <T>(factor = 2): T | number => {
      if (limit % factor === 0) {
        limit /= factor;
        if (factor > limit) {
          return factor;
        }
      }
      return largeFactor(factor + 1);
    };

    return largeFactor();
  };

  solved = () => {
    const limit = 600_851_475_143;

    const solutions = [this.solution1(limit), this.solution2(limit)];

    showResults(this.problemName + limit, solutions);
  };
}
