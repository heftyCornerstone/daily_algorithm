function solution(today, terms, privacies) {
  let answer = [];

  const [thisYear, thisMonth, thisDay] = today.split(".").map((c) => Number(c));
  const thisDate = thisYear * 12 * 28 + thisMonth * 28 + thisDay;

  const termsObj = {};
  terms.forEach((c) => {
    const [name, months] = c.split(" ");
    termsObj[name] = Number(months);
  });

  privacies.forEach((client, i) => {
    const [date, term] = client.split(" ");
    const [year, month, day] = date.split(".").map((c) => Number(c));
    const exDate = year * 12 * 28 + (month + termsObj[term]) * 28 + day;

    if (exDate <= thisDate) answer.push(i + 1);
  });

  return answer;
}
