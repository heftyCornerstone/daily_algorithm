function solution(n, k) {
  let answer = 0;
  const regEx = /^[1-9]+$/;
  const kBaseN = n.toString(k);
  const extractedNums = kBaseN.split("0").filter((c) => regEx.test(c));
  const primeNums = extractedNums.filter((c) => isPrimeNum(c));

  answer = primeNums.length;

  return answer;
}

function isPrimeNum(number) {
  const num = Number(number);
  if (num === 1 || isNaN(num)) return false;
  if (num < 4) return true;

  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) isPrime = false;
  }

  return isPrime;
}
