/**
 * You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.
 * 
 * Return a list answer of size 2 where:
 *
 *   answer[0] is a list of all players that have not lost any matches.
 *   answer[1] is a list of all players that have lost exactly one match.
 *
 * The values in the two lists should be returned in increasing order.
 */
function findWinners(matches: number[][]): number[][] {
    const answer = [[], []]
    const lossMap = new Map()
    const playerSet = new Set<number>()

    for(const match of matches){
        // Add players to playerSet
        playerSet.add(match[0])
        playerSet.add(match[1])

        // Calculate lossMap members
        const loser = match[1]

        if(lossMap.has(loser)){
            lossMap.set(loser, lossMap.get(loser) + 1)
        } else {
            lossMap.set(loser, 1)
        }
    }

    // Sort all of the players, so as to appease the tests
    const playerArraySorted = Array.from(playerSet).sort((a, b) => (a - b))

    // Loop over players and calculate final answer
    for(const player of playerArraySorted){
        if(!lossMap.has(player)){
            answer[0].push(player)
        } else if(lossMap.get(player) === 1){
            answer[1].push(player)
        }
    }

    return answer
};
