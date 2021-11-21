import { genPrime, takeWhile } from './utils';
import { displaySolutions } from './solved';

export class P007 {
  readonly problemName = 'Problem 7';
  solution1 = (limit: number): number => {
    const meh = genPrime();
    let prime: number | void;
    let i = 1;
    while (i <= limit) {
      prime = meh.next().value;
      i++;
    }
    return prime as number;
  };

  solution2 = (limit: number): number => {
    /*const result = takeWhile((val: any) => val <= limit, genPrime());
    console.log([...result].reverse())*/

    // console.log([...genPrime()])

    return 1;
  };

  solved = () => {
    const limit = 10_001;

    const solutions = [this.solution1(limit), this.solution2(limit)];
    console.log(this.problemName);
    console.table(displaySolutions(solutions));
  };
}
