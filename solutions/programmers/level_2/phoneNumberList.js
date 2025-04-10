function solution(phoneBook) {
  //sort는 조건식이 없을 때 요소를 문자열로 변환하여 유니코드 순서로 정렬
  return !phoneBook.sort().some((t, i) => {
    if (i === phoneBook.length - 1) return false;

    return phoneBook[i + 1].startsWith(phoneBook[i]);
  });
}
