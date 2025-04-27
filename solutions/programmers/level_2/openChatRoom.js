function solution(record) {
  let answer = [];
  let userNicknames = {};
  const messageMap = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  record.forEach((c) => {
    const [act, uid, nickname] = c.split(" ");
    if (
      !userNicknames[uid] ||
      (act === "Enter" && userNicknames[uid] !== nickname)
    )
      userNicknames[uid] = nickname;

    act !== "Change"
      ? answer.push({ uid, act })
      : (userNicknames[uid] = nickname);
  });

  answer = answer.map(
    ({ uid, act }) => `${userNicknames[uid]}${messageMap[act]}`
  );

  return answer;
}
