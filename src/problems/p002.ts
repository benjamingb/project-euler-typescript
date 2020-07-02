import { of, from } from "rxjs";
import { takeWhile, timeInterval, take, filter, reduce } from "rxjs/operators";
/**
 * Problem 2
 * Even Fibonacci
 *
 * Each new term in the Fibonacci sequence
 * is generated by adding the previous two terms.
 * By starting with 1 and 2, the first 10 terms will be:
 *
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 * By considering the terms in the Fibonacci sequence whose
 * values do not exceed four million, find the sum of the even-valued terms.
 */

export class P002 {
    fib1 = (limit: number): number => {
        let [prev, curr] = [1, 1];
        let sum = 0;
        while (curr < limit) {
            !(curr % 2) && (sum += curr); // is eqaul to //if (curr % 2 ==0) sum += curr
            [prev, curr] = [curr, curr + prev];
        }
        return sum;
    };

    //using fibonacci iteraror
    fib2 = (limit: number): number => {
        let sum = 0;
        for (let n of fibonacci()) {
            if (n >= limit) {
                break;
            }
            !(n % 2) && (sum += n);
        }

        return sum;
    };

    fib3 = (limit: number): any => {
        const sumEven = from(fibonacci()).pipe(
            takeWhile((val) => val <= limit),
            filter((val) => !(val % 2)),
            reduce((sum, val) => sum + val, 0)
        );
        return sumEven;

    };

    solved = () => {
        const limit = 4000000;
        console.log(this.fib1(limit));
        console.log(this.fib2(limit));
        this.fib3(limit).subscribe((val: number) => console.log(val));;
    };
}

// generator function
function* fibonacci() {
    let [prev, curr] = [0, 1];
    while (true) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}
