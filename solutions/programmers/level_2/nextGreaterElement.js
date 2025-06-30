function solution(numbers) {
  const answer = Array(numbers.length).fill(-1);
  const stack = [];

  //배열의 모든 요소 탐색
  for (let i = 0; i < numbers.length; i++) {
    //스택에 탐색해야 할 인덱스가 있고, 해당 인덱스의 숫자가 지금 탐색중인 숫자보다 작을 때
    // -> 스택의 인덱스들이 가지고 있는 숫자는 언제나 다음 숫자가 이전 숫자보다 작을 수밖에 없다 (4,3,2,1...)
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      //스택에서 인덱스 제거하기
      const idx = stack.pop();
      //이번 인덱스의 큰 수는 지금 탐색중인 숫자
      answer[idx] = numbers[i];
    }

    //스택에 탐색해야 할 다음 인덱스 추가
    stack.push(i);
  }

  return answer;
}
