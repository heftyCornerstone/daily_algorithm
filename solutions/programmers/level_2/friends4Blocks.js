function solution(m, n, board) {
  let answer = 0;
  const boardArr = board.map((c) => c.split(""));

  while (true) {
    const boardFlagSet = new Set();
    boardArr.forEach((curRow, itemY) => {
      curRow.forEach((item, itemX) => {
        popItems({item, itemX, itemY, m, n, boardFlagSet, boardArr});
      });
    });

    answer += boardFlagSet.size;
    if (!boardFlagSet.size) break;

    const flags = [...boardFlagSet.values()];
    rebuildBoard({ flags, boardArr, m, n });
  }

  return answer;
}

function popItems({item, itemX, itemY, m, n, boardFlagSet, boardArr}) {
  const checkList = [
    [0, 1, 2],
    [2, 3, 4],
    [4, 5, 6],
    [6, 7, 0],
  ];
  const directions = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];

  if (item === "0") return;

  const directionMap = {};
  directions.forEach(([y, x], i) => {
    const value =
      itemY + y >= 0 && itemY + y < m && itemX + x >= 0 && itemX + x < n
        ? [y, x]
        : false;
    directionMap[i] = value;
  });

  checkList.forEach((curBlockList) => {
    const isValid = !curBlockList.some((c) => {
      if (!directionMap[c]) return 1;

      const [dirY, dirX] = directionMap[c];
      const curBlock = boardArr[dirY + itemY][dirX + itemX];
      return curBlock !== item;
    });

    if (!isValid) return;

    curBlockList.forEach((c) => {
      const [dirY, dirX] = directionMap[c];
      boardFlagSet.add(`${dirY + itemY}-${dirX + itemX}`);
    });
  });
}

function rebuildBoard({ flags, boardArr, m, n }) {
  flags.forEach((flag) => {
    const [y, x] = flag.split("-");
    boardArr[Number(y)][Number(x)] = "0";
  });

  const verticalArr = [];
  for (let i = 0; i < n; i++) verticalArr.push([]);
  boardArr.forEach((row) => {
    row.forEach((item, colIdx) => {
      if (item !== "0") verticalArr[colIdx].push(item);
    });
  });

  verticalArr.forEach((col, colIdx) => {
    const paddedCol = col.join("").padStart(m, 0).split("");
    paddedCol.forEach((item, rowIdx) => (boardArr[rowIdx][colIdx] = item));
  });
}
