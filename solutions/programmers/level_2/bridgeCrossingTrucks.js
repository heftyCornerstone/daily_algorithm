function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let curWeight = 0;
  const onBridge = Array(bridge_length).fill(0);

  while (truck_weights.length > 0 || curWeight > 0) {
    answer += 1;
    curWeight -= onBridge.shift();
    if (curWeight + truck_weights[0] > weight) {
      onBridge.push(0);
    } else {
      if (truck_weights.length) {
        const newTruck = truck_weights.shift();
        onBridge.push(newTruck);
        curWeight += newTruck;
      }
    }
  }

  return answer;
}
