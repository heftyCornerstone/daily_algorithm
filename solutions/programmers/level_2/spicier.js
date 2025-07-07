function solution(scoville, K) {
  scoville.sort((a, b) => a - b);

  let answer = 0;
  const { push, extract, peek, size } = littleHeap(scoville);

  while (size() >= 2 && peek() < K) {
    const [first, second] = [extract(), extract()];
    const newScoville = first + second * 2;
    push(newScoville);
    answer++;
  }

  return peek() >= K ? answer : -1;
}

function littleHeap(initialArr = []) {
  let heapData = [...initialArr];

  function swap(i, j) {
    [heapData[i], heapData[j]] = [heapData[j], heapData[i]];
  }

  function bubbleUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (heapData[parent] <= heapData[index]) break;
      swap(index, parent);
      index = parent;
    }
  }

  function bubbleDown(index) {
    const length = heapData.length;
    while (true) {
      let smallest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;

      if (left < length && heapData[left] < heapData[smallest]) smallest = left;
      if (right < length && heapData[right] < heapData[smallest])
        smallest = right;

      if (index === smallest) break;
      swap(index, smallest);
      index = smallest;
    }
  }

  return {
    push(newElement) {
      heapData.push(newElement);
      bubbleUp(heapData.length - 1);
    },
    peek() {
      return heapData.length > 0 ? heapData[0] : Infinity;
    },
    size() {
      return heapData.length;
    },
    extract() {
      if (heapData.length === 0) return null;
      const top = heapData[0];
      const end = heapData.pop();
      if (heapData.length) {
        heapData[0] = end;
        bubbleDown(0);
      }
      return top;
    },
  };
}
