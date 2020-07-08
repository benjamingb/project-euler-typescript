import { range } from './utils';

export class P006 {
  multiple1 = (): number => {
    const numbers = [...range(1, 100)];

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
    this.multiple1();
  };
}
