import { displaySolutions } from './solved';

/**
 * Problem 3
 *
 * Largest prime factor
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */
export class P003 {
  readonly problemName = 'Largest prime factor';
  solution1 = (limit: number): number => {
    let factor = 2;
    while (limit != factor) {
      if (limit % factor === 0) {
        limit = limit / factor;
      } else {
        factor++;
      }
    }
    return factor;
  };

  solved = () => {
    const limit = 600_851_475_143;

    const solutions = [this.solution1(limit)];

    console.log(this.problemName);
    console.table(displaySolutions(solutions));
  };
}
