function solution(numbers) {
  const answer = numbers
    .sort((a, b) => {
      const ab = String(a) + String(b);
      const ba = String(b) + String(a);
      return ba - ab;
    })
    .join('');

  return answer[0] === '0' ? '0' : answer;
}
