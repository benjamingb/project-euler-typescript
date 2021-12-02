/*
const result = takeWhile((x: any) => x < 10, naturalNumbers());
console.log([...result]);*/

// generator function
export function* takeWhile(fn: any, xs: any) {
  for (const x of xs) {
    if (fn(x)) yield x;
    else break;
  }
}

/**
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... n
 */
export function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

/**
 *  [..range(1 ,n)]
 *
 * @param start number
 * @param end  number
 */
export function* range(start: number, end: number): any {
  yield start;
  if (start === end) return;
  yield* range(start + 1, end);
}

/**
 *  0, 1, 2, 3...n
 */
export function* naturalNumbers() {
  let n = 0;
  while (true) yield n++;
}

/**
 * Determine if number is prime
 * @param n number
 */
function isPrime(n: number) {
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;

  const m = Math.sqrt(n);
  for (let i = 2; i <= m; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

/**
 *  return iterator prime number
 */
export function* genPrime() {
  let count = 0;
  while (true) {
    if (isPrime(count)) yield count;
    count++;
  }
}
