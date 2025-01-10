function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
    const n = profit.length;

    const jobs = profit.map((v, i) => ({profit:v, difficulty:difficulty[i]}));
    jobs.sort((a,b)=>a.difficulty - b.difficulty);

    for(let i=1; i<n; i++) {
        jobs[i].profit = Math.max(jobs[i].profit, jobs[i-1].profit)
    }

    worker.sort((a,b)=>a-b);

    let i=0;
    let maxProfit = 0;

    for(const ability of worker) {
        while(i<n && jobs[i].difficulty <= ability) i++;
        if(i>0) maxProfit += jobs[i-1].profit;
    }

    return maxProfit
};