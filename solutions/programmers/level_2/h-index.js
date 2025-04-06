function solution(citations) {
  let answer = 0;
  const papers = new Map();
  citations.sort((a, b) => b - a);
  citations.reduce((acc, cur, i) => {
    if (i === citations.length - 1) return papers.set(cur, acc + 1);
    if (cur !== citations[i + 1]) {
      papers.set(cur, acc + 1);
      return acc + 1;
    }
    return acc + 1;
  }, 0);

  const papersEntries = papers.entries();
  for (const [citation, numbers] of papersEntries) {
    if (numbers - citation > 0) break;
    answer = numbers;
  }

  return answer;
}
/*
인용 횟수 내림차순으로 정렬한 다음
누산치가 인용 횟수 미만일 때 정지하자는 로직이니까 아래와 같이 간략하게 만들 수 있음.

function solution(citations) {
    var idx = 0;
    citations.sort(function(a, b){return b - a});
    while(citations[idx] > idx){
        idx++;
    }
    return idx;
}
*/