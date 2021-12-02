import { range } from './utils';
import { showResults } from './solved';

/**
 * Problem 6
 *
 * Sum square difference
 *
 *
 *
 */
export class P006 {
  readonly problemName = 'P0006 - Sum square difference';

  solution1 = (limit: number): number => {
    const numbers = [...range(1, limit)];

    // sum of the squares
    const sumSquares = numbers.map(n => Math.pow(n, 2)).reduce((a, b) => a + b);

    // sum of number
    const sum = numbers.reduce((a, b) => a + b);

    return Math.pow(sum, 2) - sumSquares;
  };

  solved = () => {
    const limit = 100;

    const solutions = [this.solution1(limit)];

    showResults(this.problemName, solutions);
  };
}
