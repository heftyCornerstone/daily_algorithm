function solution(friends, gifts) {
  const nextMonthGiftList = [];
  const users = {};

  //유저 선물 정보 오브젝트 초기화
  friends.forEach((c) => {
    users[c] = { giftLog: {}, giving: 0, receiving: 0 };
    friends.forEach((others) => {
      if (c !== others) users[c].giftLog[others] = [0, 0];
    });
  });

  //선물 주고받은 기록 생성하기
  gifts.forEach((history) => {
    const [giver, taker] = history.split(" ");

    users[giver].giftLog[taker][0]++;
    users[taker].giftLog[giver][1]++;

    users[giver].giving++;
    users[taker].receiving++;
  });

  //유저별 다음 달 선물 갯수 구하기
  friends.forEach((c) => {
    const myGiftRate = users[c].giving - users[c].receiving;
    let nextMonthGift = 0;

    Object.entries(users[c].giftLog).forEach(([friend, [gave, recived]]) => {
      const friendsGiftRate = users[friend].giving - users[friend].receiving;
      const isGiftRateHigher = myGiftRate - friendsGiftRate > 0;

      if (gave - recived > 0) nextMonthGift++;
      if (gave - recived === 0 && isGiftRateHigher) nextMonthGift++;
    });

    nextMonthGiftList.push(nextMonthGift);
  });

  return Math.max(...nextMonthGiftList);
}
