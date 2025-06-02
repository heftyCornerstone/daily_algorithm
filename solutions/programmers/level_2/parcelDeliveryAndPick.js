function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let dSum = 0,
    pSum = 0;

  for (let i = n - 1; i >= 0; i--) {
    // +=를 스택처럼 사용!
    dSum += deliveries[i];
    pSum += pickups[i];

    while (dSum > 0 || pSum > 0) {
      dSum -= cap;
      pSum -= cap;
      answer += (i + 1) * 2;
    }
  }

  return answer;
}


// function solution(cap, n, deliveries, pickups) {
//     let answer = 0;
//     const deliveryList = deliveries.reduce((acc, cur, i)=>{
//         if(cur===0 && pickups[i]===0) return acc;
//         return [...acc, {idx:i+1, deliver:cur, pick:pickups[i]}]
//     }, []);

//     while (deliveryList.length){
//         const curHouses = deliveryList.length;
//         let flag = [0, 0];
//         const deliveredIdx = [];
//         let furthest = 0;

//         for(let i=curHouses-1; i>=0; i--) {
//             if(flag[0]>=cap) break;
//             const {idx, deliver, pick} = deliveryList[i];
//             const deliverNum = Math.min(cap-flag[0], deliver);
//             furthest = Math.max(furthest, idx);

//             deliveryList[i].deliver = deliver-deliverNum;
//             flag[0]+=deliverNum;
//         }

//         for(let i=curHouses-1; i>=0; i--) {
//             if(flag[1]>=cap) break;
//             const {idx, deliver, pick} = deliveryList[i];
//             const pickNum = Math.min(cap-flag[1], pick);
//             furthest = Math.max(furthest, idx);

//             deliveryList[i].pick = pick-pickNum;
//             flag[1]+=pickNum;
//         }

//         for(let i=curHouses-1; i>=0; i--) {
//             const {idx, deliver, pick} = deliveryList[i];
//             if(deliver !== 0 || pick !== 0) continue;
//             deliveredIdx.push({i:i, houseNum:idx});
//         }

//         answer += (furthest) * 2;

//         if (deliveredIdx.length) deliveredIdx.forEach(({i})=>deliveryList.splice(i, 1));

//     }

//     return answer;
// }
