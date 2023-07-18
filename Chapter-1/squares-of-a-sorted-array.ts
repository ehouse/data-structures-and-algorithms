function sortedSquares(nums: number[]): number[] {
    let negatives = [], positives = []
    let squared =  nums.map((x) => (x ** 2))
    return squared.sort((a, b) => a-b)
};
