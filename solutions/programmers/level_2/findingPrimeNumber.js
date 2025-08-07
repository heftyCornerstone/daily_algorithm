function solution(numbers) {
  let answer = 0;
  const numbersLen = numbers.length;
  const numbersSet = new Set();

  function dfs(numStr, numArr, depth) {
    if (depth === numbersLen) return;
    numArr.forEach((c, i) => {
      const curNum = Number(numStr + c);
      if (!numbersSet.has(curNum) && isPrimeNum(curNum)) {
        answer += 1;
      }
      numbersSet.add(curNum);
      dfs(
        numStr + c,
        numArr.filter((c, fI) => fI !== i),
        depth + 1
      );
    });
  }

  dfs('', numbers.split(''), 0);

  return answer;
}

function isPrimeNum(number) {
  const num = Number(number);
  if (num === 0 || num === 1 || isNaN(num)) return false;
  if (num < 4) return true;

  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) isPrime = false;
  }

  return isPrime;
}
