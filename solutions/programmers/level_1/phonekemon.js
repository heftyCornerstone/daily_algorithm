function solution(nums) {
  const targetLength = nums.length / 2;

  let speciesNum = 0;
  const species = new Map();
  nums.forEach((cur) => {
    if (species.get(cur)) return;
    speciesNum++;
    species.set(cur, true);
  });

  return speciesNum > targetLength ? targetLength : speciesNum;
}
