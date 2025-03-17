function solution(arr) {
  const filteredArr = new Set(arr);
  const sortedArr = [...filteredArr].sort((a, b) => a - b);

  return sortedArr.reduce((acc, cur) => (acc * cur) / gcd(acc, cur));
}

function gcd(numA, numB) {
  const [big, small] = [Math.max(numA, numB), Math.min(numA, numB)];
  if (big % small !== 0) return gcd(small, big % small);
  if (big % small === 0) return small;
}

// 최소공약수 최대공배수는 유클리드 호제법을 배우자...
