function solution(str1, str2) {
  const regEx = /^[a-z]+$/;
  const str1Group = new Map();
  const treatedStr1 = str1.toLowerCase();
  const treatedStr2 = str2.toLowerCase();
  let [numerator, denominator] = [0, 0];
  let answer = 0;

  treatedStr1.split("").forEach((c, i) => {
    if (i === treatedStr1.length - 1) return;
    if (!regEx.test(c + treatedStr1[i + 1])) return;

    const element = c + treatedStr1[i + 1];
    const amount = str1Group.has(element) ? str1Group.get(element) + 1 : 1;
    str1Group.set(element, amount);

    denominator++;
  });

  treatedStr2.split("").forEach((c, i) => {
    if (i === treatedStr2.length - 1) return;
    if (!regEx.test(c + treatedStr2[i + 1])) return;

    const element = c + treatedStr2[i + 1];
    const amount = str1Group.get(element);

    if (!str1Group.has(element)) {
      denominator++;
      return;
    }

    if (amount === 0) {
      denominator++;
    } else {
      numerator++;
      str1Group.set(element, amount - 1);
    }
  });

  if (numerator + denominator === 0) return 65536;

  answer = Math.floor((numerator / denominator) * 65536);

  return answer;
}
