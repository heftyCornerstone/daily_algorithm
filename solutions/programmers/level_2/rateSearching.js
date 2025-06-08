function solution(info, query) {
  const data = {};

  // info 전처리: 모든 조합을 key로 저장
  for (let i = 0; i < info.length; i++) {
    const [lang, job, career, food, scoreStr] = info[i].split(" ");
    const score = Number(scoreStr);
    const conditions = [lang, job, career, food];

    // 0~4개 속성 조합에 대해 '-' 조합 생성
    const dfs = (depth, key) => {
      if (depth === 4) {
        const k = key.join(" ");
        if (!data[k]) data[k] = [];
        data[k].push(score);
        return;
      }
      // 원래 조건
      key.push(conditions[depth]);
      dfs(depth + 1, key);
      key.pop();

      // '-' 조건
      key.push("-");
      dfs(depth + 1, key);
      key.pop();
    };
    dfs(0, []);
  }

  // 각 조합의 점수 리스트 정렬
  for (const key in data) {
    data[key].sort((a, b) => a - b);
  }

  const result = [];

  for (let q of query) {
    // query 전처리: and 제거 후 분리
    q = q.replace(/ and /g, " ");
    const parts = q.split(" ");
    const key = parts.slice(0, 4).join(" ");
    const score = Number(parts[4]);

    if (!data[key]) {
      result.push(0);
      continue;
    }

    // 이진 탐색으로 score 이상 개수 찾기
    const scores = data[key];
    let left = 0,
      right = scores.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (scores[mid] >= score) right = mid;
      else left = mid + 1;
    }
    result.push(scores.length - left);
  }

  return result;
}

// 모든 가능한 -조합
// 이진탐색
