/**
 * Given an array of integers nums, you start with an initial positive value startValue.
 *
 * In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).
 *
 * Return the minimum positive value of startValue such that the step by step sum is never less than 1.
 */
function minStartValue(nums: number[]): number {
    // Store lowest walking sum
    let lowest = nums[0]

    // Calculate Running Sum
    const runningSum = [nums[0]]

    for(let x = 1; x < nums.length; x++){
        // Calculate new sum
        const current = runningSum[x-1] + nums[x]
        runningSum.push(current)

        // Replace lowest value
        lowest = Math.min(current, lowest)
    }

    // startValue only necisary if lowest < 1
    if(lowest < 1){
        return Math.abs(lowest) + 1
    } else {
        return 1
    }
};
