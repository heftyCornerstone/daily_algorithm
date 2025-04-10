function solution(s) {
  let answer = [];
  const data = new Set();
  const noBrace = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]")).sort(
    (a, b) => a.length - b.length
  );

  noBrace.forEach((group) => {
    group.forEach((element) => data.add(element));
  });

  answer = [...data.values()];

  return answer;
}
