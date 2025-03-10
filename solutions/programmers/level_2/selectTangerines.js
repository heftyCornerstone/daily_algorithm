function solution(k, tangerine) {
  let answer = 0;
  let allTangerine = tangerine.length;
  const size = {};

  tangerine.forEach((c) => (size[c] = (size[c] || 0) + 1));

  const sortedBySize = Object.values(size).sort((a, b) => a - b);
  answer = sortedBySize.length;

  sortedBySize.forEach((c) => {
    if (allTangerine - c < k) return;
    allTangerine -= c;
    answer -= 1;
  });

  return answer;
}
