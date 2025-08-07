function solution(arr) {
  let answer = [0, 0];

  function dfs(loc, curWidth) {
    if (curWidth < 1) return;

    const [locX, locY] = loc;

    let isCompressable = true;
    for (let i = locY; i < locY + curWidth; i++) {
      for (let k = locX; k < locX + curWidth; k++) {
        if (arr[i][k] === arr[locY][locX]) continue;
        isCompressable = false;
        break;
      }
    }

    if (isCompressable) {
      arr[locY][locX] === 0 ? (answer[0] += 1) : (answer[1] += 1);
      return;
    }

    const newWidth = curWidth / 2;
    [
      [0, 0],
      [newWidth, 0],
      [0, newWidth],
      [newWidth, newWidth],
    ].forEach((c) => dfs([locX + c[0], locY + c[1]], newWidth));
  }

  dfs([0, 0], arr.length);
  return answer;
}
