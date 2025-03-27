function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  let answer = 0;
  const trimmedCities = cities.map((c) => c.toLowerCase());
  const cache = new Map();

  trimmedCities.forEach((c) => {
    const cacheLen = [...cache].length;

    if (cache.has(c)) {
      cache.delete(c);
      cache.set(c, true);

      answer++;
    } else {
      if (cacheLen >= cacheSize) {
        const firstData = cache.keys().next().value;
        cache.delete(firstData);
      }
      cache.set(c, true);

      answer += 5;
    }
  });

  return answer;
}
