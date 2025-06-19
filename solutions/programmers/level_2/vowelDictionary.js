function solution(word) {
  let answer = 0;
  const letters = ["A", "E", "I", "O", "U"];
  let index = 0;
  let found = false;

  function dfs(curWord) {
    if (found) return;
    if (curWord === word) {
      answer = index;
      found = true;
      return;
    }
    if (curWord.length === 5) return;

    for (let i = 0; i < letters.length; i++) {
      index += 1;
      dfs(curWord + letters[i]);
    }
  }

  dfs("");

  return answer;
}
