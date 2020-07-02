import * as problem from '../src/problems'

describe('P0001', () => {
    const p = new problem.P001;
    const limit = 1000;
    const result = 233168;

    it(`solution1`, () => {
        expect(p.solution1(limit)).toEqual(result)
    });
    it(`solution2`, () => {
        expect(p.solution2(limit)).toEqual(result)
    });
    it(`solution3`, () => {
        expect(p.solution3(limit)).toEqual(result)
    });

})

describe('P0002', () => {
    const p = new problem.P002;
    const limit = 4000000;
    const result = 4613732

    it(`solution1`, () => {
        expect(p.fib1(limit)).toEqual(result)
    });
    it(`solution2`, () => {
        expect(p.fib2(limit)).toEqual(result)
    });
  
})

describe('P0003', () => {
    const p = new problem.P003;
    const limit = 600_851_475_143;;
    const result = 6857

    it(`solution1`, () => {
        expect(p.prime1(limit)).toEqual(result)
    });
})