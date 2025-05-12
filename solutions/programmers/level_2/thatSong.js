function solution(m, musicinfos) {
  let answer = [];
  const trimmedMemory = convertMelody(m);

  for (const music of musicinfos) {
    const [start, end, name, melody] = music.split(",");
    const trimmedMelody = convertMelody(melody);
    const playT = minuteConverter(end) - minuteConverter(start);
    const fullMelody = trimmedMelody
      .repeat(Math.ceil(playT / trimmedMelody.length))
      .slice(0, playT);

    if (!fullMelody.includes(trimmedMemory)) continue;

    answer.push([name, playT]);
  }

  if (answer.length === 0) return "(None)";

  return answer.sort((a, b) => b[1] - a[1])[0][0];
}

function minuteConverter(time) {
  return time
    .split(":")
    .map((c, i) => Number(c) * Math.max(60 * (1 - i), 1))
    .reduce((acc, cur) => acc + cur);
}

function convertMelody(melody) {
  return melody
    .replace(/C#/g, "c")
    .replace(/D#/g, "d")
    .replace(/F#/g, "f")
    .replace(/G#/g, "g")
    .replace(/A#/g, "a")
    .replace(/B#/g, "b")
    .replace(/E#/g, "e");
}
