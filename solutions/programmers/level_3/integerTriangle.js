function solution(triangle) {
  let sums = [triangle[0][0]];

  triangle.forEach((curLv, i) => {
    if (i === 0) return;

    const newSums = [];
    curLv.forEach((curElm, k) => {
      const left = sums[k - 1] ?? 0;
      const right = sums[k] ?? 0;
      newSums.push(Math.max(left, right) + curElm);
    });

    sums = newSums;
  });

  return Math.max(...sums);
}
