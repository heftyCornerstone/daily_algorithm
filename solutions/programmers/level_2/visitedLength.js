function solution(dirs) {
  let answer = 0;
  const dirsMap = {
    U: [0, 1],
    D: [0, -1],
    L: [-1, 0],
    R: [1, 0],
  };
  const roadSet = new Set();

  let curLocation = [0, 0];
  dirs.split("").forEach((curD) => {
    const [dirX, dirY] = dirsMap[curD];
    let isExcess = false;
    let newLocation = [curLocation[0] + dirX, curLocation[1] + dirY];

    // 좌표평면 초과 감지
    newLocation = newLocation.map((c) => {
      if (c > 5 || c < -5) isExcess = true;
      if (c > 5) return 5;
      if (c < -5) return -5;
      return c;
    });

    // 길 이름 정렬
    const [locationA, locationB] = [curLocation, newLocation].sort((a, b) => {
      return a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1];
    });

    const roadName = `[${locationA}]-[${locationB}]`;
    curLocation = newLocation;
    if (isExcess || roadSet.has(roadName)) return;
    roadSet.add(roadName);
    answer += 1;
  });

  return answer;
}
