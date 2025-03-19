function solution(n, left, right) {
  const [newLeft, newRight] = [left % n, (left % n) + (right - left)];
  const endRow = Math.floor(right / n) + 1;
  const defaultRow = [];
  let oneDimensionalArr = [];

  for (let i = 0; i < n; i++) defaultRow.push(i + 1);

  for (let i = left; i < endRow * n; i += n) {
    const sameNum = Math.floor(i / n) + 1;
    const sameNumArr = new Array(sameNum).fill(sameNum);
    const newRow = [...sameNumArr, ...defaultRow.slice(sameNum)];

    oneDimensionalArr = [...oneDimensionalArr, ...newRow];
  }

  return oneDimensionalArr.slice(newLeft, newRight + 1);
}

// 더 간단한 코드 : 같은 숫자로 채우냐, 그렇지 않느냐
// function solution(n, left, right) {
//     const answerArr = new Array(right-left+1).fill(left).map((c, i)=>c+i);
//     return answerArr.map((c)=>(Math.max(Math.floor(c/n)+1, c%n+1)));
// }
