function solution(numbers, target) {
  let answer = 0;

  function dfs(number, depth) {
    if (depth === numbers.length) {
      if (number === target) answer += 1;
      return;
    }
    dfs(number + numbers[depth], depth + 1);
    dfs(number - numbers[depth], depth + 1);
  }

  dfs(0, 0);

  return answer;
}
