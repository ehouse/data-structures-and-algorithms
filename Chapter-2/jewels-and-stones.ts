/**
 * You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
 *
 * Letters are case sensitive, so "a" is considered a different type of stone from "A".
 */
function numJewelsInStones(jewels: string, stones: string): number {
    const jewelSet = new Set(jewels)
    let answer = 0

    for(let x of stones){
        if(jewelSet.has(x)){
            answer++
        }
    }

    return answer
};
