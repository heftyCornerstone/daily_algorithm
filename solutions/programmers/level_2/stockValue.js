function solution(prices) {
  const answer = Array(prices.length).fill(0);
  let stack = [];

  for (let i = 0; i < prices.length; i++) {
    if (stack.length) {
      stack.forEach((c) => (answer[c] += 1));
      // 현재값보다 비싼 가격을 스택에서 제거하기
      if (prices[stack[stack.length - 1]] > prices[i]) {
        stack = stack.filter((c) => prices[c] <= prices[i]);
      }
    }
    stack.push(i);
  }

  return answer;
}
