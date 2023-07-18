/**
 * Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.
 */
function largestUniqueNumber(nums: number[]): number {
    const uniqueNumbers = new Set([...nums].sort((a, b) => (b - a)))
    const numberFrequency = new Map<number, number>()

    for(const x of nums){
        if(numberFrequency.has(x)){
            numberFrequency.set(x, numberFrequency.get(x) + 1)
        } else {
            numberFrequency.set(x, 1)
        }
    }

    for(const x of uniqueNumbers){
        if(numberFrequency.get(x) === 1){
            return x
        }
    }

    return -1
};
