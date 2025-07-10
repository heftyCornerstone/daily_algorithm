function solution(land) {
  let answer = 0;

  for (let i = 1; i < land.length; i++) {
    for (let k = 0; k < 4; k++) {
      land[i][k] += Math.max(...land[i - 1].filter((c, i) => i !== k));
    }
  }

  answer = Math.max(...land[land.length - 1]);

  return answer;
}
