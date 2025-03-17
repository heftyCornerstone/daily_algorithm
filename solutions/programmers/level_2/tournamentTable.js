function solution(n, a, b) {
  let answer = 0;
  let [leftSide, rightSide] = [a, b].sort((a, b) => a - b);

  let games = 0;
  let people = n;
  while (true) {
    people /= 2;
    games++;
    if (people === 1) break;
  }

  for (let i = 0; i < games; i++) {
    const half = n / 2 ** (i + 1);
    if (leftSide > half) {
      leftSide -= half;
      rightSide -= half;
    }
    if (leftSide <= half && rightSide > half) {
      answer = games - i;
      break;
    }
  }

  return answer;
}
