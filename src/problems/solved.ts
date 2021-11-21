import { performance } from 'perf_hooks';

export function displaySolutions<T>(solutions: T[]) {
  const measure = <S>(solved: S) => {
    const startTime = performance.now();
    const result = solved;
    const endTime = performance.now();

    const totalTime = Number((endTime - startTime).toFixed(4));
    return [totalTime, result];
  };

  const results = solutions.reduce((acc: any, solved, index) => {
    const [time, result] = measure(solved);
    acc[`Solution ${index + 1}`] = {
      Result: result,
      Time: time
    };
    return acc;
  }, {});

  return results;
}
