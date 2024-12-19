function twoSum(nums: number[], target: number): number[] {
    const hash = new Map();
    for (let i=0; i<nums.length; i++) {
        if(hash.has(target-nums[i])) return [i, hash.get(target-nums[i])];
        hash.set(nums[i], i);
    }
};