import { displaySolutions } from './solved';
import { range } from './utils';

/**
 * Problem 4
 * Largest palindrome product
 *
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 *
 */
export class P004 {
  readonly problemName = 'Largest palindrome product';

  //333ms
  palindrome1 = (start: number, end: number): number => {
    /* length = end - start;
    const list = Array.from({ length }, (_, i) => start + i).reverse();*/
    const list = [...range(start, end)].reverse();

    const plist = list.reduce((acc: number[], val) => {
      return acc.concat(
        list.map(subVal => subVal * val).filter(p => this.isPalindrome(p))
      );
    }, []);
    return Math.max(...plist);
  };

  //54ms
  palindrome2 = (start: number, end: number) => {
    const list = [...range(start, end)].reverse();

    const result = list.reduce((acc, curr, idx, arr) => {
      // si el acumulador es mayor que el la multiplicacion
      // del valor catual con el primer elemnto de la lista cortada
      if (acc < curr * arr[idx]) {
        const pal = arr
          .slice(idx)
          .map(val => val * curr)
          .filter(val => this.isPalindrome(val))
          .reduce((max, val) => (max < val ? val : max), 0);

        if (pal > acc) return pal;
      }
      return acc;
    });

    return result;
  };

  // loop 9387
  palindrome3 = (start: number, end: number): number => {
    let largest = 0;

    for (let x = end; x >= start; x--) {
      if (x * end <= largest) break;

      for (let y = end; y >= start; y--) {
        const mult = x * y;

        if (mult <= largest) break;

        if (this.isPalindrome(mult) && mult > largest) largest = mult;
      }
    }

    return largest;
  };

  private isPalindrome = (n: number): boolean => {
    // Optiont1
    const reverse = ('' + n).split('').reverse().join('');

    // Optiont2
    //const reverse = Array.from(String(), Number).reverse().join('');

    return parseInt(reverse) === n;
  };

  //console.log(this.problemName);
  //console.table(displaySolutions(solutions));

  solved = () => {
    const start = 100;
    const end = 1000;

    const solutions = [
      this.palindrome1(start, end),
      this.palindrome2(start, end),
      this.palindrome3(start, end)
    ];

    console.log(this.problemName);
    console.table(displaySolutions(solutions));
  };
}
