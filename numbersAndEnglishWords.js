function solution(s) {
  let answer = 0;
  const words = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  let cardString = "";
  for (let i = 0; i < s.length; i++) {
    if (!Object.is(Number(s[i]), NaN)) {
      answer += s[i];
      cardString = "";
      continue;
    }

    const newAcc = cardString + s[i];
    if (words[newAcc] === undefined) {
      cardString = newAcc;
      continue;
    }

    answer += words[newAcc];
    cardString = "";
  }

  return Number(answer);
}
