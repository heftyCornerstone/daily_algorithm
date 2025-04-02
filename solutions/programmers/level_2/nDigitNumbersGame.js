function solution(n, t, m, p) {
  let answer = "";
  const endIndex = m * t - (m - p);
  let nums = "";

  for (let i = 0; i < m * t; i++) {
    const convertedNumArr = i.toString(n).toUpperCase();
    nums += convertedNumArr;

    if (nums.length >= endIndex) break;
  }

  for (let i = p - 1; answer.length < t; i += m) answer += nums[i];

  return answer;
}
