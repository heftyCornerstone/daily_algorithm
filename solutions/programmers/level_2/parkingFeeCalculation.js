function solution(fees, records) {
  let answer = [];
  const closedTime = 23 * 60 + 59;
  const recordsData = {};
  records.forEach((c) => {
    const [time, carId, io] = c.split(" ");
    const [hours, minutes] = time.split(":").map((c) => Number(c));
    const trimedTime = hours * 60 + minutes;

    if (!recordsData[carId]) recordsData[carId] = 0;

    if (io === "IN") recordsData[carId] += closedTime - trimedTime;
    if (io === "OUT") recordsData[carId] -= closedTime - trimedTime;
  });

  const recordsEntry = Object.entries(recordsData).sort((a, b) => a[0] - b[0]);
  recordsEntry.forEach(([carId, parkingData]) => {
    const extraTimes =
      parkingData - fees[0] > 0
        ? Math.ceil((parkingData - fees[0]) / fees[2])
        : 0;
    answer.push(fees[1] + extraTimes * fees[3]);
  });

  return answer;
}

//리팩토링 이전 코드
function solution2(fees, records) {
  let answer = [];
  const closedTime = 23 * 60 + 59;
  const recordsData = {};
  records.forEach((c) => {
    const [time, carId, io] = c.split(" ");
    const [hours, minutes] = time.split(":").map((c) => Number(c));
    const trimedTime = hours * 60 + minutes;
    const carData = recordsData[carId];

    if (!carData) {
      recordsData[carId] = [trimedTime, 0];
      return;
    }

    if (io === "IN") carData.push(trimedTime, 0);
    if (io === "OUT") {
      carData.pop();
      carData.push(trimedTime - carData.pop());
    }
    recordsData[carId] = carData;
  });

  const recordsEntry = Object.entries(recordsData).sort((a, b) => a[0] - b[0]);
  recordsEntry.forEach(([carId, parkingData]) => {
    let lastData = parkingData.pop();
    if (!lastData) lastData = closedTime - parkingData.pop();
    parkingData.push(lastData);

    const dataSum = parkingData.reduce((acc, cur) => acc + cur);
    const extraTimes =
      dataSum - fees[0] > 0 ? Math.ceil((dataSum - fees[0]) / fees[2]) : 0;
    answer.push(fees[1] + extraTimes * fees[3]);
  });

  return answer;
}
