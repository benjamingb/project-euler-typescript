/**
 * Largest prime factor
 *  Problem 3
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */
export class P003 {
  readonly problemName = 'largePrimneFactor';
  solution1 = (limit: number): number => {
    let factor = 2;
    while (limit != factor) {
      if (limit % factor === 0) {
        limit = limit / factor;
      } else {
        factor++;
      }
    }
    return factor;
  };

  solved = () => {
    const limit = 600_851_475_143;
    console.log('Solved', this.solution1(limit));
  };
}
