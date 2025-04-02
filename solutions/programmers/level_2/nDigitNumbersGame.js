function solution(n, t, m, p) {
  let answer = "";
  const endIndex = m * t - (m - p);
  let nums = "";

  for (let i = 0; i < m * t; i++) {
    const convertedNumArr = i.toString(n).split("");

    for (let k = 0; k < convertedNumArr.length; k++) {
      if (nums.length === endIndex) break;

      const curNum = convertedNumArr[k];
      nums += curNum.toUpperCase();
    }

    if (nums.length === endIndex) break;
  }

  for (let i = p - 1; i < nums.length; i += m) answer += nums[i];

  return answer;
}
