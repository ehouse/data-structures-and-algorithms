/**
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 */
function missingNumber(nums: number[]): number {
    let indexStore = 0, numStore = 0

    for(let x = 0; x < nums.length; x++){
        indexStore = indexStore + x
        numStore = numStore + nums[x]
    }

    return (indexStore + nums.length) - numStore
};
