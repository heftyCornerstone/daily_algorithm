function solution(x, y, n) {
  const visited = new Set();
  const queue = [[y, 0]];

  while (queue.length > 0) {
    const [cur, count] = queue.shift();

    if (cur === x) return count;

    const nexts = [];

    if (cur % 2 === 0) nexts.push(cur / 2);
    if (cur % 3 === 0) nexts.push(cur / 3);
    nexts.push(cur - n);

    for (const next of nexts) {
      if (next >= x && !visited.has(next)) {
        visited.add(next);
        queue.push([next, count + 1]);
      }
    }
  }

  return -1;
}
