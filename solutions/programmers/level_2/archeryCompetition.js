function solution(n, info) {
  let answer = [];
  let maxSub = 0;
  let combiScores = [];
  //경우의 수 구하기
  const combinations = bfs(n);

  //최대격차 구하며 각 경우의 수가 지니는 정보 저장하기
  combinations.forEach((combi) => {
    let myScore = 0;
    let rivalScore = 0;
    let leastShot = undefined;

    //나와 라이벌의 점수 구하기
    combi.forEach((cur, i) => {
      if (cur === 0 && info[i] === 0) return;
      if (cur !== 0) leastShot = [i, cur];
      cur > info[i] ? (myScore += 10 - i) : (rivalScore += 10 - i);
    });

    //이전에 등록해둔 최대 격차보다 차이가 덜 나면 저장하지 않는다
    if (myScore - rivalScore < maxSub) return;

    //최대 격차 갱신
    maxSub = myScore - rivalScore;
    
    //정보 저장 : 스코어 기록, 격차, 가장 낮은 점수판에 쏜 화살 갯수
    combiScores.push({
      arr: combi,
      sub: myScore - rivalScore,
      last: leastShot,
    });
  });

  //라이벌과 격차를 낼 수 없다면 early return
  if (maxSub === 0) return [-1];

  //최대 격차를 낸 기록만 추리기
  const maxCombis = combiScores.filter((cur) => cur.sub === maxSub);
  
  //요구조건 맞추기 : 최대격차 기록 중 가장 낮은 점수판에 쏜 화살 갯수가 더 많은 것
  const optCombi = maxCombis.reduce((acc, cur) => {
    if (cur.last[0] > acc.last[0]) return cur;
    if (cur.last[0] === acc.last[0] && cur.last[1] > acc.last[1]) return cur;
    return acc;
  });

  answer = optCombi.arr;

  return answer;
}

function bfs(arrows) {
  let combinationList = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

  for (let i = 0; i <= 10; i++) {
    const newCombi = [];
    combinationList.forEach((cur) => {
      const leftArrow = arrows - cur.reduce((acc, current) => acc + current);
      // 남은 화살 없으면 이대로를 push
      if (leftArrow === 0) {
        newCombi.push([...cur]);
        return;
      }
      for (let k = 0; k <= leftArrow; k++) {
        const curCombi = [...cur];
        curCombi[i] = k;
        newCombi.push(curCombi);
      }
    });

    combinationList = newCombi;
  }
  
  const validCombi = combinationList.filter(
    (combi) => combi.reduce((acc, cur) => acc + cur) === arrows
  );
  return validCombi;
}
