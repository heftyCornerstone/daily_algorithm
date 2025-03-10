function solution(number, limit, power) {
  return [...Array(number + 1).keys()].reduce((acc, c) => {
    const sqrt = Math.sqrt(c);
    let divisor = 0;
    for (i = 1; i <= sqrt; i++) {
      if (c % i === 0 && i !== sqrt) divisor += 2;
      if (i === sqrt) divisor++;
    }
    return divisor <= limit ? acc + divisor : acc + power;
  }, 0);
}
