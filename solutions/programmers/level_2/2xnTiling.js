function solution(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let prev2 = 1;
  let prev1 = 2;
  let current = 0;

  for (let i = 3; i <= n; i++) {
    const sum = (prev1 % 1000000007) + (prev2 % 1000000007);
    current = sum > 1000000007 ? sum % 1000000007 : sum;
    prev2 = prev1;
    prev1 = current;
  }

  return current;
}
