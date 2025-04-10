function solution(priorities, location) {
    let answer = 0;
    const indexedData = priorities.map((task, i)=>{
        return {index:i, priority:task};
    });
    
    while(true) {
        const curTask = indexedData.shift(); 
        const isHighestPriority = !(indexedData.some((c)=>c.priority>curTask.priority));
        
        if(isHighestPriority) {
            answer+=1;
            if(curTask.index===location) break;
            continue;
        }
        
        indexedData.push(curTask); 
    }
    
    return answer;
}