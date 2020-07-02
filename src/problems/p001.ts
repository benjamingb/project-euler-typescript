/**
 * Problem 1
 * 
 * Multiples of 3 and 5
 * 
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
 * The sum of these multiples is 23.
 * 
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

export class P001 {
  //using filter an reduce
  solution1 = (limit: number): number =>
    [...Array(limit).keys()]
      .filter((x) => !(x % 3) || !(x % 5))
      .reduce((sum, val) => sum + val);

  //Using for..of
  solution2 = (limit: number): number => {
    const list = Array.from({ length: limit }, (x, i: number) => i);

    let sum = 0;
    for (let x of list) {
      sum += !(x % 3) || !(x % 5) ? x : 0;
    }

    return sum;
  };

  //using for
  solution3 = (limit: number): number => {
    let sum = 0;
    for (let x = 0; x < limit; x++) {
      if (x % 3 == 0 || x % 5 == 0) {
        sum += x;
      }
    }

    return sum;
  };

  solved = () => {
    const limit = 1000;

    const solutions = [
      this.solution1(limit),
      this.solution2(limit),
      this.solution3(limit),
    ];

    solutions.map((result) => {
      console.log(result);
    });
  };
}
