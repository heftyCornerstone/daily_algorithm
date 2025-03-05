function solution(survey, choices) {
  let answer = "";
  let surveyResult = {
    RT: { R: 0, T: 0 },
    CF: { C: 0, F: 0 },
    JM: { J: 0, M: 0 },
    AN: { A: 0, N: 0 },
  };

  survey.forEach((question, i) => {
    if (choices[i] === 4) return;

    const type = choices[i] <= 4 ? question[0] : question[1];
    const point = Math.abs(choices[i] - 4);
    const scale = Object.keys(surveyResult).find((k) => k.includes(type));

    surveyResult[scale][type] += point;
  });

  Object.keys(surveyResult).forEach((curType) => {
    const curScale = surveyResult[curType];
    const [left, right] = Object.keys(curScale);

    if (curScale[left] === curScale[right]) {
      answer += left;
      return;
    }
    curScale[left] > curScale[right] ? (answer += left) : (answer += right);
  });

  return answer;
}
