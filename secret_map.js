function decoder(length, decimalNumArr) {
    return decimalNumArr.map((num) => {
        const binaryRow = Number(num).toString(2).padStart(length, '0').split('');
        return binaryRow;
    });
}

function solution(n, arr1, arr2) {
    let answer = [];
    const map1 = decoder(n, arr1);
    const map2 = decoder(n, arr2);

    answer = map1.map((mapRow, y) => {
        const mapRowArr = mapRow.map((curSpot, x) =>
            (map2[y][x] === '1' || curSpot === '1') ? '#' : ' '
        );
        return mapRowArr.join('');
    });

    return answer;
}