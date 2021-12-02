import * as problem from '../src/problems';

describe('P0001', () => {
  const p = new problem.P001();
  const limit = 1000;
  const expected = 233168;

  it(`${p.problemName} - solution 1`, () => {
    expect(p.solution1(limit)).toEqual(expected);
  });
  it(`${p.problemName} -  solution 2`, () => {
    expect(p.solution2(limit)).toEqual(expected);
  });
  it(`${p.problemName} - solution 3`, () => {
    expect(p.solution3(limit)).toEqual(expected);
  });
});

describe('P0002', () => {
  const p = new problem.P002();
  const limit = 4000000;
  const expected = 4613732;

  it(`evenFibonacci - solution 1`, () => {
    expect(p.solution1(limit)).toEqual(expected);
  });
  it(`evenFibonacci - solution 2`, () => {
    expect(p.solution2(limit)).toEqual(expected);
  });
  it(`evenFibonacci - solution 3`, () => {
    expect(p.solution3(limit)).toEqual(expected);
  });
  it(`evenFibonacci - solution 4`, () => {
    p.solution4(limit).subscribe((val: number) => {
      expect(val).toEqual(expected);
    });
  });
});

describe('P0003', () => {
  const p = new problem.P003();
  const limit = 600_851_475_143;
  const expected = 6857;

  it(`largestPrime of ${limit} - solution 1`, () => {
    expect(p.solution1(limit)).toEqual(expected);
  });

  it(`largestPrime of ${limit} - solution 1`, () => {
    expect(p.solution2(limit)).toEqual(expected);
  });
});

describe('P0004', () => {
  const p = new problem.P004();
  const start = 100;
  const end = 1000;
  const expected = 906609;

  it(`palindrome - solution 1`, () => {
    expect(p.palindrome1(start, end)).toEqual(expected);
  });
  it(`palindrome - solution 2`, () => {
    expect(p.palindrome2(start, end)).toEqual(expected);
  });
  it(`palindrome - solution 3`, () => {
    expect(p.palindrome3(start, end)).toEqual(expected);
  });
});

describe('P0005', () => {
  const p = new problem.P005();
  const limit = 20;
  const expected = 232792560;

  it(`smallMultiple - solution 1`, () => {
    expect(p.solution1(limit)).toEqual(expected);
  });
  it(`smallMultiple - solution 2`, () => {
    expect(p.solution1(limit)).toEqual(expected);
  });
});

describe('P0006', () => {
  const p = new problem.P006();
  const limit = 100;
  const expected = 25164150;

  it(`Sum square difference - solution 1`, () => {
    expect(p.solution1(limit)).toEqual(expected);
  });
});

describe('P0008', () => {
  const p = new problem.P008();
  const len = 13;
  const expected = 23514624000;

  it(`Largest product - solution 1`, () => {
    expect(p.solution1(len)).toEqual(expected);
  });
  it(`Largest product - solution 2`, () => {
    expect(p.solution2(len)).toEqual(expected);
  });
});
