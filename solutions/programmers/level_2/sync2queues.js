function solution(queue1, queue2) {
    const arr = [...queue1, ...queue2];
    const n = queue1.length;
    const total = arr.reduce((acc, cur) => acc + cur, 0);

    if (total % 2 !== 0) return -1;
    const goal = total / 2;

    let left = 0;
    let right = n;
    let sum = queue1.reduce((acc, cur) => acc + cur, 0);
    let maxOps = n * 3;

    for (let ops = 0; ops <= maxOps; ops++) {
        if (sum === goal) return ops;
        if (sum > goal) {
            sum -= arr[left++];
        } else {
            sum += arr[right++];
        }
    }

    return -1;
}