function solution(s) {
  let answer = s;

  for (let i = 1; i <= s.length; i++) {
    let curTail = s.slice(s.length - (s.length % i));
    let curCompression = "";
    let curSlice = [1, ""];

    for (let k = 0; k < s.length; k += i) {
      const newSlice = s.slice(k, k + i);
      if (newSlice === curSlice[1]) {
        curSlice[0] += 1;
        // 마지막 블록은 이전과 최근이 다른 것과는 관계 없이 무조건 이전 데이터를 curCompression에 추가할 수 있도록
        if (k < s.length - i) continue;
      }

      const repeatedNum = curSlice[0] === 1 ? "" : `${curSlice[0]}`;
      curCompression += repeatedNum + curSlice[1];

      //만일 마지막 블록이고, 이전과 다른 패턴이라면 이전 뿐만 아니라 최근 slice도 compression에 추가할 수 있도록 하기
      if (k === s.length - i && newSlice !== curSlice[1])
        curCompression += newSlice;

      curSlice = [1, newSlice];
    }
    curCompression += curTail;

    if (answer.length > curCompression.length) answer = curCompression;
  }

  return answer.length;
}

/*
마지막 블록의 예외적인 연산
이전과 최근을 비교하여 '서로 값이 다를 경우 이전 값'을 curCompression에 추가해주고,
최근 값은 새로운 curSlice 등록을 해주고 있어서
마지막 블록은 무조건 누락이 됨.

마지막 블록은 두가지 경우로 나눠서 볼 수 있음.
이전과 최근이 같다 vs 이전과 최근이 다르다

같다
if (k < s.length - i) continue;으로써 마지막 블록이 되어도 건너뛰지 않고 아래 코드를 실행하도록 함.
마지막 블록을 curCompression에 추가.

다르다
이전 값과 최근 값 모두 curCompression에 추가.
*/
