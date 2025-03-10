function solution(dartResult) {
  let answer = 0;
  const pointZone = { S: 1, D: 2, T: 3 };
  dartResult += 0;

  dartResult.split("").reduce(
    (acc, cur, i) => {
      const { prevPoint, curPoint } = acc;
      //현재 값 숫자
      if (!Object.is(Number(cur), NaN)) {
        //한자릿수 이상의 숫자일 경우
        if (!Object.is(Number(dartResult[i - 1]), NaN)) {
          const newCurPoint = Number(`${curPoint}` + cur);
          return { ...acc, curPoint: newCurPoint };
        }
        //다음 게임으로 넘어감
        answer += curPoint;
        return { prevPoint: curPoint, curPoint: Number(cur) };
      }
      //현재 값 특별상
      if (cur === "*" || cur === "#") {
        if (cur === "#") return { ...acc, curPoint: -curPoint };
        answer += prevPoint;
        return { ...acc, curPoint: curPoint * 2 };
      }
      //현재 값 SDT
      return { ...acc, curPoint: curPoint ** pointZone[cur] };
    },
    { prevPoint: 0, curPoint: 0 }
  );

  return answer;
}
