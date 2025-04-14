function solution(topping) {
  let answer = 0;
  const piece2Map = new Map();
  topping.forEach((c) => {
    const cValue = piece2Map.get(c);
    cValue ? piece2Map.set(c, cValue + 1) : piece2Map.set(c, 1);
  });

  const piece1 = new Set();
  let piece2 = [...piece2Map.keys()].length;

  for (let i = 0; i < topping.length; i++) {
    const curTopping = topping[i];
    const curOnPiece2 = piece2Map.get(curTopping);

    piece1.add(curTopping);

    if (curOnPiece2 === 1) piece2 -= 1;
    if (curOnPiece2 !== 0) piece2Map.set(curTopping, curOnPiece2 - 1);

    if (piece1.size === piece2) answer += 1;
  }

  return answer;
}
