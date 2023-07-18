function findMaxAverage(nums: number[], k: number): number {
    let ans, cur = 0

    // Calculate initial value
    for(let x = 0; x < k; x++){
        cur = cur + nums[x]
    }

    // set initial answer
    ans = cur

    for(let x = 0; x < nums.length - k; x++){
        // Add new right
        cur = cur + nums[x+k]
        // Remove old left
        cur = cur - nums[x]
 
        // Check for new high value
        ans = Math.max(ans, cur)
    }

    return ans / k
};
