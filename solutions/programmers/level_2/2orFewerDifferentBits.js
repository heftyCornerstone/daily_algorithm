function solution(numbers) {
  let answer = [];

  numbers.forEach((c) => {
    const num = c.toString(2);
    const fullNum = '1'.padEnd(num.length, '1');

    let minimul = num;
    if (num === fullNum) {
      minimul = '10'.padEnd(num.length + 1, '1');
    } else {
      for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] !== '0') continue;
        let newMinimul = minimul.substring(0, i) + '1';
        if (newMinimul.length < num.length) newMinimul += '0';
        if (newMinimul.length < num.length) newMinimul += minimul.substring(i + 2);
        minimul = newMinimul;

        break;
      }
    }

    answer.push(parseInt(minimul, 2));
  });

  return answer;
}
