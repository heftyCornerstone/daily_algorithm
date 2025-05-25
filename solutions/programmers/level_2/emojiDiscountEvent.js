function solution(users, emoticons) {
  let answer = [];
  let maxRecord = {
    subscribers: 0,
    earned: 0,
  };

  //가능한 할인 목록 구하기
  const minDiscount = Math.min(...users.map((c) => c[0]));
  const discountArr = [10, 20, 30, 40].filter((c) => c >= minDiscount);
  
  //모든 할인 경우의 수 구하기
  const combinationList = bfs(emoticons.length, discountArr);
  
  //모든 할인가격 구해놓기
  const priceList = getPriceList(emoticons, discountArr);

  //경우의 수마다 수익성 결과를 구하여 그 중에서 가장 적합한 것 추리기
  combinationList.forEach((curCombi) => {
    const { subscribers: maxSub, earned: maxPur } = maxRecord;
    const { subscribers: curSub, earned: curPur } = purchaseSimulation(users, curCombi, priceList);

    if (maxSub < curSub || (maxSub === curSub && maxPur < curPur)) {
      maxRecord = { subscribers: curSub, earned: curPur };
    }
  });

  answer = [maxRecord.subscribers, maxRecord.earned];

  return answer;
}

function getPriceList(emoticons, discountArr) {
    const priceList = [];

    emoticons.forEach((c) => {
    const priceObj = {};
    discountArr.forEach((curDiscount) => {
      priceObj[curDiscount] = c * ((100 - curDiscount) / 100);
    });
    priceList.push(priceObj);
  });

  return priceList;
}

function purchaseSimulation(users, curCombi, priceList) {
    const purchaseMap = {
      subscribers: 0,
      earned: 0,
    };

    //현재 경우에 대해서 유저들의 구매 결과
    users.map((curUser) => {
      let spend = 0;
      curCombi.forEach((curDiscount, i) => {
        if (curDiscount < curUser[0]) return;
        spend += priceList[i][curDiscount];
      });
      spend < curUser[1]
        ? (purchaseMap.earned += spend)
        : (purchaseMap.subscribers += 1);
    });

    return purchaseMap;
}

function bfs(slotNum, discountArr) {
  let combinationList = [...discountArr.map((c) => [c])];

  for (let i = 1; i < slotNum; i++) {
    const newCombi = [];
    combinationList.forEach((curCombi) => {
      discountArr.forEach((c) => newCombi.push([...curCombi, c]));
    });

    combinationList = newCombi;
  }

  return combinationList;
}
