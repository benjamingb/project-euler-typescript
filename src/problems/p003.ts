export class P003 {
  prime1 = (limit: number): number => {
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
    console.log('Solved', this.prime1(limit));
  };
}
