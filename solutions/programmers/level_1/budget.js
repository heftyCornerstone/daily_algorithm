function solution(d, budget) {
    let answer = 0;
    d.sort((a, b) => a-b);
    d.reduce((acc, cur, i)=>{
        if(acc+cur>budget && answer === 0) answer=i;
        else if(i===d.length-1 && answer === 0) answer=d.length;
        return acc+cur;
    }, 0);
    return answer;
}