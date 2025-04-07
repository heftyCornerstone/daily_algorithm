function solution(progresses, speeds) {
  let answer = [];
  const schedule = progresses.map((c, i) => Math.ceil((100 - c) / speeds[i]));

  let largeTask = schedule[0];
  answer = schedule.reduce(
    (acc, cur) => {
      if (cur > largeTask) {
        largeTask = cur;
        return [...acc, 1];
      }

      const lastElement = acc.pop();
      return [...acc, lastElement + 1];
    },
    [0]
  );

  return answer;
}
