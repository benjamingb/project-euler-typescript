import { range } from './utils';

export class P004 {
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

        if (pal > acc) return  pal;
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

  solved = () => {
    console.log(this.palindrome1(100, 1000));
    console.log(this.palindrome2(100, 1000));
    console.log(this.palindrome3(100, 1000));
  };
}
