/**
 * You are given a 0-indexed array nums of n integers, and an integer k.
 *
 * The k-radius average for a subarray of nums centered at some index i with the radius k is the average of all elements in nums between the indices i - k and i + k (inclusive). If there are less than k elements before or after the index i, then the k-radius average is -1.
 *
 * Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i.
 *
 * The average of x elements is the sum of the x elements divided by x, using integer division. The integer division truncates toward zero, which means losing its fractional part.
 *
 * For example, the average of four elements 2, 3, 1, and 5 is (2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75, which truncates to 2.
 */
function getAverages(nums: number[], k: number): number[] {
    // Base case; return nums if k is 0
    if(k === 0){
        return nums
    }

    // Generate first runningSum value
    const runningSum = [nums[0]]

    // Prefil answers array with -1's
    const answer = new Array(nums.length).fill(-1)

    // Calculate runningSum array
    for(let x = 1; x < nums.length; x++){
        const current = runningSum[x-1] + nums[x]
        runningSum.push(current)
    }

    // Calculate fixed window averages
    for(let x = k; x < nums.length - k; x++){
        let current = runningSum[x + k]
        if(x != k){
            current = current - runningSum[x - (k + 1)]
        }

        answer[x] = Math.floor(current / (k * 2 + 1))
    }

    return answer
};
