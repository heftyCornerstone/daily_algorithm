function solution(n, words) {
  let answer = [];
  const usedWords = new Set();
  for (let i = 0; i < words.length; i++) {
    const isInvalidWord = i !== 0 && words[i - 1].at(-1) !== words[i][0];
    const isAlreadyUsed = !!usedWords.has(words[i]);

    if (!usedWords.has(words[i])) usedWords.add(words[i]);
    if (isInvalidWord || isAlreadyUsed) {
      const person = (i + 1) % n === 0 ? n : (i + 1) % n;
      answer = [person, Math.ceil((i + 1) / n)];
      break;
    }
  }
  if (answer.length === 0) answer = [0, 0];

  return answer;
}
