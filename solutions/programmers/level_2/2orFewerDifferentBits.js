function solution(numbers) {
    let answer = [];
    
    numbers.forEach((c)=>{
        const num = (c).toString(2);
        const fullNum = '1'.padEnd(num.length, '1');
        
        let minimul = num;
        if(num===fullNum) {
            minimul = ('10').padEnd(num.length+1, '1');
        } else {
            const zeroIdx = num.lastIndexOf('0');
            minimul = (num.substring(0, zeroIdx) + '1');
            if(minimul.length<num.length) minimul += '0';
            if(minimul.length<num.length) minimul += num.substring(zeroIdx+2);
        }

        answer.push(parseInt(minimul, 2));
    });
    
    return answer;
}