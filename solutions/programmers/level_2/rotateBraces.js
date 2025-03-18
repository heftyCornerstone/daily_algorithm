function solution(s) {
  let answer = 0;
  let sArr = s.split("");
  const start = new Map([
    ["(", "normal"],
    ["[", "square"],
    ["{", "curly"],
  ]);
  const end = new Map([
    [")", "normal"],
    ["]", "square"],
    ["}", "curly"],
  ]);

  for (let i = 0; i < s.length; i++) {
    const flagStack = [];
    let isInvalid = false;
    
    sArr.unshift(sArr.pop());

    for (let k = 0; k < s.length; k++) {
      let flagName = "";

      if (start.has(sArr[k])) {
        flagName = start.get(sArr[k]);
        flagStack.push(flagName);
      }
      if (end.has(sArr[k])) {
        flagName = end.get(sArr[k]);
        if (flagStack.at(-1) === flagName) {
          flagStack.pop();
        } else {
          isInvalid = true;
          flagStack.push(flagName);
        }
      }

      if (isInvalid) break;
    }

    const isValid = !flagStack.length;

    if (isValid) answer++;
  }

  return answer;
}
