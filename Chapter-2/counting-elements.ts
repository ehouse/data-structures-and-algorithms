/**
 * Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.
 */
function countElements(arr: number[]): number {
    let answer = 0
    const hashSet = new Set(arr)

    // Iterate and calcuate final answer
    for(const x of arr){
        if(hashSet.has(x + 1)){
            answer = answer + 1
        }
    }

    return answer
};
