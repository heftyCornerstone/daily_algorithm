function solution(arr) {
  const filteredArr = new Set(arr);
  const sortedArr = [...filteredArr].sort((a, b) => a - b);

  let lcm = sortedArr[0];
  for (let i = 0; i < sortedArr.length - 1; i++) {
    lcm = gcd(sortedArr[i + 1], lcm);
  }
  return sortedArr.reduce((acc, cur) => (acc * cur) / gcd(acc, cur));
}

function gcd(numA, numB) {
  const [big, small] = [Math.max(numA, numB), Math.min(numA, numB)];
  if (big % small !== 0) return gcd(small, big % small);
  if (big % small === 0) return small;
}

// 최소공약수 최대공배수는 유클리드 호제법을 배우자...
