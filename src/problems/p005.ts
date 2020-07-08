import { range } from './utils';
import { lcm } from 'mathjs';

export class P005 {
  smallMultiple1 = (limit: number): number => {
    return [...range(1, limit)].reduce(
      (result, val) => (result = lcm(result, val))
    );
  };

  //using only iterators 
  smallMultiple2 = (limit: number): number => {
    let isFound = false;
    let currNumber = 0;

    while (!isFound) {
      // Add itself if it's not divisible
      currNumber += limit;

      for (let i = limit; i >= 1; i--) {
        // if currNumber is not divisible by numbers in range, break out of forloop
        if (currNumber % i !== 0) break;

        // currNumber is divisible by all numbers down to 1!
        if (i === 1) isFound = true;
      }
    }
    return currNumber;
  };

  solved = () => {
    console.log(this.smallMultiple1(20));

    console.log(this.smallMultiple2(20));
  };
}

function* evenNumber() {
  let value = 2;
  while (true) {
    yield value;
    console.log('-', { value });
    //value += value % 2 ? 1 : 2;
    if (!(value % 2)) {
      console.log('xx', value);
      value += 2;
      console.log('a', value);
    }
  }
}
