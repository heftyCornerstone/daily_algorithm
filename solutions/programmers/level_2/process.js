function solution(priorities, location) {
    let answer = 0;
    const dataList = new Map();
    const indexedData = priorities.map((task, i)=>{
        dataList.set(i, task);
        return {index:i, priority:task};
    });
    
    while(true) {
        const highestPriority = Math.max(...[...dataList.values()]);
        const curTask = indexedData.shift(); 
        
        if(curTask.priority===highestPriority) {
            dataList.delete(curTask.index);
            answer+=1;
            if(curTask.index===location) break;
            continue;
        }
        
        indexedData.push(curTask); 
    }
    
    return answer;
}