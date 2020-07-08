import { genPrime, takeWhile } from './utils';

export class P007 {
  solution1 = (limit: number): number => {
    let meh = genPrime();
    let prime: any | number;
    let i = 1;
    while (i <= limit) {
      prime = meh.next().value;
      i++;
    }
    return prime;
  };

  solution2 = (limit: number): number => {
    /*const result = takeWhile((val: any) => val <= limit, genPrime());
    console.log([...result].reverse())*/
    
   // console.log([...genPrime()])

    return 1;
  };

  solved = () => {
    const limit = 10_001;
    console.log(this.solution1(10_001));
    console.log(this.solution2(13));
  };
}
