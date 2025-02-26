function solution(N, stages) {
  let answer = [];
  let failureRates = new Array(N + 1)
    .fill(0)
    .map((_, i) => ({ stage: i, failureRate: 0 }));
  stages.sort((a, b) => a - b);

  //스테이지별 실패율 구하기
  stages.reduce((acc, cur, i) => {
    if (stages[i + 1] && cur === stages[i + 1]) return (acc += 1);
    const failureRate = acc / (stages.length - (i + 1 - acc));
    failureRates[cur] = { stage: cur, failureRate };
    return (acc = 1);
  }, 1);

  const sortedFailureRates = failureRates
    .slice(1, N + 1)
    .sort((a, b) => b.failureRate - a.failureRate);

  answer = sortedFailureRates.map((c) => c.stage);

  return answer;
}
