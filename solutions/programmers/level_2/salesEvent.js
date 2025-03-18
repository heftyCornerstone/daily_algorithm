function solution(want, number, discount) {
  let answer = 0;
  const wishList = {};
  want.forEach((c, i) => (wishList[c] = [number[i], 0]));

  for (let i = 0; i < discount.length - 9; i++) {
    const memberShip = discount.slice(i, i + 10);
    let isValid = true;

    memberShip.forEach((c) => {
      if (wishList[c]) wishList[c][1]++;
    });

    Object.entries(wishList).forEach(([name, [wishNum, available]]) => {
      if (wishNum !== available) isValid = false;
      wishList[name][1] = 0;
    });

    if (isValid) answer++;
  }

  return answer;
}
