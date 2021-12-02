import { showResults } from './solved';

/**
 * Problem 9
 *
 * Special Pythagorean triplet
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 *
 */

export class P009 {
  readonly problemName = 'P009 - Special Pythagorean triplet';

  solution1 = (n: number): number => {
    let a = 1;
    let b = 2;
    let c = Math.sqrt(a * a + b * b);
    let sum = a + b + c;
    while (sum != n) {
      if (sum > n) {
        a++;
        b = a + 1;
      } else {
        b++;
      }

      /*if (sum > n) {
        console.log('a:' + a + '  b:' + b + '  c:' + c);
        console.log(sum);
        break;
      }*/

      c = Math.sqrt(a * a + b * b);
      sum = a + b + c;
    }

    return a * b * c;
  };

  solution2 = (n: number): number => {
    for (let c = Math.floor(n / 3 + 1); c < n / 2; c++) {
      const sqa_b = c * c - n * n + 2 * n * c;
      const a_b = Math.floor(Math.sqrt(sqa_b));

      if (a_b * a_b == sqa_b) {
        const b = (n - c + a_b) / 2;
        const a = n - b - c;
        return a * b * c;
      }
    }
    return -1;
  };

  solved = () => {
    const limit = 1000;

    const solutions = [this.solution1(limit), this.solution2(limit)];

    showResults(this.problemName, solutions);
  };
}
