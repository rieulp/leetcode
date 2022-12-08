/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const answer = [];
    const n = nums.length;
    
    if(n < 3) return answer;
    
    let target = 0;
    
    nums.sort((a,b)=>a-b)
    
    for(let i=0; i<n-2; i++) {
        if(nums[i] > 0) break;
        if(i > target && nums[i]===nums[i-1]) continue;
        let j = i+1;
        let k = n-1;
        while(j<k) {
            const sum = nums[i] + nums[j] + nums[k];
            if(sum === target) {
                answer.push([nums[i], nums[j], nums[k]]);
                while(nums[j] === nums[j+1]) j++;
                while(nums[k] === nums[k-1]) k--;
                j++;
                k--
            }else if(sum < target) j++;
            else k--;
        }
    }
    return answer;
};