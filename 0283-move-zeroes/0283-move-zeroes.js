/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const n = nums.length;
    let cnt = 0;
    for(let i=0; i<n-cnt; i++) {
        if(nums[i]===0) {
            for(let j=i; j<n-1; j++) nums[j] = nums[j+1];
            nums[n-1] = 0;
            cnt++;
            i--;
        }
    }
    return nums;
};