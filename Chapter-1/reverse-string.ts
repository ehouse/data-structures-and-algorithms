/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let x = 0, y = s.length - 1
    while(x < y){
        let right = s[y]
        s[y] = s[x]
        s[x] = right
        x++
        y--
    }
};
