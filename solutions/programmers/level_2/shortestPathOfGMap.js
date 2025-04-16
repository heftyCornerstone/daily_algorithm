function solution(maps) {
  let answer = -1;
  const [rows, cols] = [maps.length, maps[0].length];
  const checker = Array.from({ length: rows }, () =>
    Array.from({ length: cols }).fill(false)
  );
  const routesQueue = [[0, 0, 1]];
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  checker[0][0] = true;

  while (routesQueue.length) {
    const [y, x, depth] = routesQueue.shift();
    if (y === rows - 1 && x === cols - 1) {
      answer = depth;
      break;
    }

    directions.forEach(([dy, dx]) => {
      const [ny, nx] = [y + dy, x + dx];
      if (
        ny < 0 ||
        nx < 0 ||
        ny >= rows ||
        nx >= cols ||
        checker[ny][nx] ||
        !maps[ny][nx]
      )
        return;

      checker[ny][nx] = true;
      routesQueue.push([ny, nx, depth + 1]);
    });
  }

  return answer;
}

// DFS 풀이 - 최단거리 알고리즘으로서는 부적절하지만...
// function solution(maps) {
//   let answer = 0;
//   const routes = [];
//   getRoutes(maps, routes);

//   answer = routes.length ? Math.min(...routes) : -1;

//   return answer;
// }

// function getRoutes(
//   map,
//   stack,
//   location = { prev: new Map(), cur: [0, 0] },
//   depth = 1
// ) {
//   const accessibles = [
//     [1, 0],
//     [-1, 0],
//     [0, 1],
//     [0, -1],
//   ];
//   const [limitY, limitX] = [map.length - 1, map[0].length - 1];
//   const { prev, cur } = location;

//   if (cur[0] === limitY && cur[1] === limitX) {
//     stack.push(depth);
//     return;
//   }

//   accessibles.forEach((c) => {
//     const [newY, newX] = [cur[0] + c[0], cur[1] + c[1]];
//     const isVisited = prev.has(`${[newY, newX]}`);
//     if (isVisited || newY < 0 || newX < 0 || newY > limitY || newX > limitX)
//       return;
//     prev.set(`${[newY, newX]}`, true);

//     const block = map[newY][newX];
//     const newLocation = { prev: new Map([...prev]), cur: [newY, newX] };
//     if (block === 1) return getRoutes(map, stack, newLocation, depth + 1);
//   });
// }
