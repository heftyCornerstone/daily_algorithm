function solution(order) {
  let answer = 0;
  let curMax = 0;
  const stack = [];

  for (let k = 0; k < order.length; k++) {
    const c = order[k];
    if (c > curMax) {
      if (c - 1 !== curMax) {
        for (let i = curMax + 1; i < c; i++) {
          stack.push(i);
        }
      }
      curMax = c;
      answer += 1;
    } else {
      const stackItem = stack.pop();
      if (stackItem !== c) break;
      answer += 1;
    }
  }

  return answer;
}
