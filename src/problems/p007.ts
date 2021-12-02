import { genPrime } from './utils';
import { showResults } from './solved';

/**
 * Problem 7
 *
 * 10001st prime
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 *
 */
export class P007 {
  readonly problemName = 'P0007 - 10001st prime';
  counter = 0;

  solution1 = (limit: number): number => {
    const gp = genPrime();
    let prime: number | void;
    let i = 1;
    while (i <= limit) {
      prime = gp.next().value;
      i++;
    }
    return prime as number;
  };

  solution2 = (limit: number): number => {
    const gp = genPrime();

    const lastPrime = <T>(position = 1): T | number => {
      const prime = gp.next().value as number;

      return position >= limit ? prime : lastPrime(position + 1);
    };
    return lastPrime();
  };

  solved = () => {
    const limit = 10_001;

    const solutions = [this.solution1(limit), this.solution2(limit)];

    showResults(this.problemName, solutions);
  };
}
