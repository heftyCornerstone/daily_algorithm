function solution(k, dungeons) {
  let answer = -1;
  const combinations = [];
  dfs(combinations, dungeons);

  for (let i = 0; i < combinations.length; i++) {
    let fatigueRate = k;
    let count = 0;

    for (const [required, consumed] of combinations[i]) {
      if (fatigueRate < required) break;
      fatigueRate -= consumed;
      count++;
    }

    answer = Math.max(answer, count);
    
    if (count === combinations[0].length) break;
  }

  return answer;
}

function dfs(storage, dungeons, accumulation = []) {
  if (dungeons.length === 0) {
    storage.push(accumulation);
    return;
  }

  dungeons.forEach((c, i) => {
    const splicedArr = [...dungeons];
    splicedArr.splice(i, 1);
    return dfs(storage, splicedArr, [...accumulation, c]);
  });
}
