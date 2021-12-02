import { showResults } from './solved';
import { genPrime } from './utils';

/**
 * Problem 10
 *
 * Summation of primes
 *
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * ind the sum of all the primes below two million.
 */

export class P010 {
  readonly problemName = 'P0010 - Largest prime factor of ';

  solution1 = (limit: number): number => {
    const gp = genPrime();

    let prime = gp.next().value as number;
    let sum = 0;
    while (prime < limit) {
      sum += prime;
      prime = gp.next().value as number;
    }
    return sum;
  };

  solved = () => {
    const limit = 2_000_000;

    const solutions = [this.solution1(limit)];

    showResults(this.problemName + limit, solutions);
  };
}
