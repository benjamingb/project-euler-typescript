/*function* takeWhile(fn: any, xs: any) {
    for (let x of xs) {
        if (fn(x)) yield x;
        else break;
    }
}

function* naturalNumbers() {
    let n = 0;
    while (true) yield n++;
}
const result = takeWhile((x: any) => x < 10, naturalNumbers());
console.log([...result]);*/

// generator function
export function* takeWhile(fn: any, xs: any) {
  for (let x of xs) {
    if (fn(x)) 
      yield x;
    else 
      break;
  }
}

// generator function
export function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}
