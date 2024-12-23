function missingNumber(nums: number[]): number {
    const max = nums.length;
    const numberSet = new Set(nums);
    for(let num=0; num<=max; num++){
        if(!numberSet.has(num)) return num;
    }
};