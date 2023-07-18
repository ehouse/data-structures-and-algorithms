/**
 * Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
 *
 * You can use each character in text at most once. Return the maximum number of instances that can be formed.
 */
function maxNumberOfBalloons(text: string): number {
    const letterCount = new Map<string, number>()
    let answer = 0

    // Count up all of the numbers
    for(const letter of text){
        letterCount.set(letter, (letterCount.get(letter) || 0) + 1 )
    }

    while(true){
        for(const x of "balloon"){
            if(letterCount.get(x) > 0){
                letterCount.set(x, letterCount.get(x) - 1)
            } else {
                return answer
            }
        }
        answer++
    }

    return answer
};
