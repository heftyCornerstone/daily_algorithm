function solution(clothes) {
  const drawer = {};
  clothes.forEach(([_, category]) => {
    drawer[category] = (drawer[category] || 0) + 1;
  });

  return Object.values(drawer).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}
