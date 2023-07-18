/**
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 */
function runningSum(nums: number[]): number[] {
    const runningSums = [nums[0]]

    for(let x = 1; x < nums.length; x++){
        runningSums.push(runningSums[x-1] + nums[x])
    }

    return runningSums
};
