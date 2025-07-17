function solution(skill, skill_trees) {
  let answer = 0;
  const skillMap = {};
  for (let i = 0; i < skill.length; i++) {
    skillMap[skill[i]] = i;
  }

  skill_trees.forEach((c) => {
    let skillLv = 0;
    for (let i = 0; i < c.length; i++) {
      const curSkill = c[i];
      if (skillMap[curSkill] === undefined && i !== c.length - 1) continue;
      if (skillMap[curSkill] !== undefined && skillMap[curSkill] !== skillLv)
        break;
      if (i === c.length - 1) answer += 1;
      skillLv += 1;
    }
  });

  return answer;
}
