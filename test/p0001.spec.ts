import { P0001 } from '../src/problems'

describe('P0001', () => {
    const p = new P0001;
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
