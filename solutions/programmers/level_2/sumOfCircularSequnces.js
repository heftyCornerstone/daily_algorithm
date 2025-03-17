function solution(elements) {
  const sequence = new Set();

  for (let i = 1; i <= elements.length; i++) {
    for (let k = 0; k < elements.length; k++) {
      const sliceEnd = k + i > elements.length + 1 ? elements.length : k + i;
      const leftOver = k + i - (elements.length + 1);

      let newSum = elements.slice(k, sliceEnd).reduce((acc, cur) => acc + cur);
      if (leftOver > 0)
        newSum += elements.slice(0, leftOver).reduce((acc, cur) => acc + cur);

      sequence.add(newSum);
    }
  }

  return [...sequence].length;
}
