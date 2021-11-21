import { range } from './utils';
import { displaySolutions } from './solved';
export class P006 {
  readonly problemName = 'Problem 6';

  solution1 = (limit: number): number => {
    const numbers = [...range(1, limit)];

    const sumSquares1 = numbers
      .map(n => Math.pow(n, 2))
      .reduce((a, b) => a + b);
    console.log('sum', sumSquares1);

    const sumSquares2 = numbers.reduce((a, b) => a + b);
    console.log('sum', sumSquares2);

    const diff = Math.pow(sumSquares2, 2) - sumSquares1;
    console.log({ diff });
    return 1;
  };

  solved = () => {
    const limit = 1000;

    const solutions = [this.solution1(limit)];
    console.log(this.problemName);
    console.table(displaySolutions(solutions));
  };
}
