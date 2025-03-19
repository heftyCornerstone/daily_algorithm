function solution(arr1, arr2) {
  const [longerRow, longerColumn] = [arr1, arr2];
  const mtrxRowLen = longerColumn[0].length;

  const answerMtrx = [];
  for (let i = 0; i < arr1.length; i++) answerMtrx.push([]);

  const columns = {};
  for (let i = 0; i < arr2[0].length; i++) columns[i] = [];
  arr2.forEach((c, i) => {
    c.forEach((curElm, k) => columns[k].push(curElm));
  });

  const answer = answerMtrx.map((_, m) => {
    const curRow = longerRow[m];

    const newRow = [];
    for (let i = 0; i < mtrxRowLen; i++) {
      let newElm = 0;
      curRow.forEach((curElm, k) => (newElm += curElm * columns[i][k]));
      newRow.push(newElm);
    }

    return newRow;
  });

  return answer;
}
