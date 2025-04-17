function solution(msg) {
  let answer = [];
  const dictionary = new Map();
  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i);
    dictionary.set(letter, i + 1);
  }

  const msgLetters = msg.split("");

  for (let i = 0; i < msgLetters.length; i++) {
    let next = msgLetters[i];

    while (dictionary.has(next) && i < msgLetters.length) {
      const newNext = next + msgLetters[i + 1];
      if (!dictionary.has(newNext)) break;
      next = newNext;
      i++;
    }

    answer.push(dictionary.get(next));
    dictionary.set(next + msgLetters[i + 1], dictionary.size + 1);
  }

  return answer;
}

/*---------------------------------------------------------------------------*/
// 리팩토링 이전 버전
function prevSolution(msg) {
  let answer = [];
  const dictionary = new Map();
  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i);
    dictionary.set(letter, i + 1);
  }

  const msgLetters = msg.split("");
  let next = "";

  while (msgLetters.length) {
    for (let i = 0; i < msgLetters.length; i++) {
      const curLetter = msgLetters.shift();
      const newCur = next + curLetter;

      if (!dictionary.has(newCur)) {
        answer.push(dictionary.get(next));
        dictionary.set(newCur, dictionary.size + 1);
        next = curLetter;
        break;
      }

      next = newCur;
    }

    if (!msgLetters.length && next) answer.push(dictionary.get(next));
  }

  return answer;
}
