function longestOnes(nums: number[], k: number): number {
    let ans = 0, left = 0, flipped = 0

    for(let right = 0; right < nums.length; right++){
        // Check right array value; perform action
        if(nums[right] === 0){
            flipped++
        }

        // Check for base case to move left
        while(flipped > k){
            if(nums[left] === 0){
                flipped--
            }
            left++

        }

        // Determine if new value is larger then answer
        ans = Math.max(right - left + 1, ans)

    }

    return ans
};
