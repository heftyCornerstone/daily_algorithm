function solution(p) {
  let answer = "";
  if (p === "") return "";

  let curTask = p;
  const taskStack = [];
  while (true) {
    const { isValid, validSection, unvalidU, unvalidV } = uvSeperator(curTask);
    if (isValid) break;
    taskStack.unshift({ valid: validSection, unvalid: unvalidU });
    curTask = unvalidV;
  }

  let validatedV = curTask;
  taskStack.forEach(({ valid, unvalid }) => {
    const headV = "(" + validatedV + ")";
    const trimmedU = unvalid.slice(1, unvalid.length - 1);
    const tailU = trimmedU
      .split("")
      .map((c) => (c === "(" ? ")" : "("))
      .join("");

    validatedV = valid + headV + tailU;
  });

  return answer + validatedV;
}

function uvSeperator(braceArr) {
  const returnMap = {
    isValid: false,
    validSection: "",
    unvalidU: "",
    unvalidV: "",
  };
  const braceCode = {
    "(": 1,
    ")": -1,
  };
  let unBalanced = 0;
  const braceStack = [];
  let unvalidPointers = [0];

  //uv 나누기
  for (let i = 0; i < braceArr.length; i++) {
    const curCode = braceCode[braceArr[i]];
    unBalanced += curCode;
    const lastBrace = braceStack.at(braceStack.length - 1);
    lastBrace - curCode > 0 ? braceStack.pop() : braceStack.push(curCode);

    if (unBalanced) continue;

    //밸런스가 맞다면 올바른 괄호 문자열 체크
    if (braceStack.length) {
      unvalidPointers[1] = i + 1;
      break;
    }
    unvalidPointers[0] = i + 1;
  }

  //returnMap 세팅하기
  if (unvalidPointers[0] === braceArr.length) {
    // v가 없는 경우 : u가 전부이거나, 처음부터 ''가 입력으로 들어왔거나
    returnMap.isValid = true;
    returnMap.validSection = braceArr;
  } else {
    returnMap.validSection = braceArr.slice(0, unvalidPointers[0]);
    returnMap.unvalidU = braceArr.slice(unvalidPointers[0], unvalidPointers[1]);
    returnMap.unvalidV = braceArr.slice(unvalidPointers[1]);
  }

  return returnMap;
}

// 괄호 변환 과정 예시
// (()))()((())())(()(()))(()
/*
    (())    )()((())())(()(()))(()
    (())    )(  )(  (())() )(  ()(()) )(  ()
    (())    (  )(  (()) () )(  () (()) )(  ()  )
    (())    (  (  (())() )(  () (()) )(  ()  )  )
    (())    (  (  (())()  (  () (()) )(  ()  )  )  )
    (())    (  (  (())()  (  ()(())  (  ()  )  )  )  )
    
    (())(((())()(()(())(()))))
*/
