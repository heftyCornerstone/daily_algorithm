function solution(id_list, report, k) {
  let answer = [];
  const users = {};
  const bannedUsers = [];

  id_list.forEach(
    (c) => (users[c] = { reportedNum: 0, isBanned: false, reports: [] })
  );
  report.sort();

  //신고 정보 업데이트
  report.forEach((reportData, i) => {
    if (reportData === report[i - 1]) return;

    const [reporter, reportedUser] = reportData.split(" ");
    const reported = users[reportedUser];
    const isBanned = reported.isBanned;

    users[reporter].reports.push(reportedUser);

    if (reported.reportedNum < k) reported.reportedNum += 1;
    if (!isBanned && reported.reportedNum === k) {
      reported.isBanned = true;
      bannedUsers.push(reportedUser);
    }
  });

  id_list.forEach((curUser) => {
    const messages = users[curUser].reports.filter(
      (c) => bannedUsers.indexOf(c) !== -1
    ).length;
    answer.push(messages);
  });

  return answer;
}

// Set을 사용할 경우
// function solution2(id_list, report, k) {
//   let answer = [];
//   const users = {};

//   // 유저 정보 초기화
//   id_list.forEach((id) => {
//     users[id] = { reportedNum: 0, reports: new Set() };
//   });

//   // 중복 신고 제거를 위해 Set 사용
//   const uniqueReports = new Set(report);

//   // 신고 정보 처리
//   uniqueReports.forEach((entry) => {
//     const [reporter, reportedUser] = entry.split(" ");
//     users[reporter].reports.add(reportedUser); // 신고한 유저 기록
//     users[reportedUser].reportedNum += 1; // 신고당한 횟수 증가
//   });

//   // 정지된 유저 찾기
//   const bannedUsers = new Set(
//     id_list.filter((id) => users[id].reportedNum >= k)
//   );

//   // 결과 메일 계산
//   id_list.forEach((id) => {
//     let mailCount = [...users[id].reports].filter((reportedUser) =>
//       bannedUsers.has(reportedUser)
//     ).length;
//     answer.push(mailCount);
//   });

//   return answer;
// }
