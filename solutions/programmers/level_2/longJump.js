function solution(n) {
  if (n === 1 || n === 2) return n;

  let prev2 = 1;
  let prev1 = 2;
  let currentNum = 0;

  for (let i = 3; i <= n; i++) {
    currentNum = (prev1 + prev2) % 1234567;
    prev2 = prev1;
    prev1 = currentNum;
  }

  return currentNum;
}
