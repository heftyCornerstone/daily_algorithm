function solution(new_id) {
  const regex = /[a-z0-9-_.]/;
  const stepOne = new_id.toLowerCase();
  const stepTwo = stepOne.split("").filter((cur) => regex.test(cur));
  const stepThree = stepTwo.filter(
    (cur, i) => !(cur === "." && stepTwo[i + 1] === ".")
  );

  //step 4
  if (stepThree.at(0) === ".") stepThree.shift();
  if (stepThree.at(-1) === ".") stepThree.pop();

  //step 5
  if (stepThree.length === 0) stepThree.push("a");

  const joinedId = stepThree.join("");

  //step 6
  if (stepThree.length > 15) {
    const lastIdx = stepThree[14] === "." ? 14 : 15;
    return joinedId.slice(0, lastIdx);
  }

  //step 7
  if (stepThree.length < 3) return joinedId.padEnd(3, stepThree.at(-1));

  return stepThree.join("");
}
