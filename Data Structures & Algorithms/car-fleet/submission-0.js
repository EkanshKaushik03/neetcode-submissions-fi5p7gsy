class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let map = new Map();
        let stack = [];
        let maxTime = 0;
        for(let i=0; i<position.length; i++){
            map.set(position[i],speed[i]);
        }
        let sortedPositions = position.sort((a, b) => b - a);

        for(let k=0; k<sortedPositions.length; k++){
            maxTime = (target - sortedPositions[k]) / map.get(sortedPositions[k])
            if(k===0){
            stack.push(maxTime)
            }
            else{
                if(maxTime > stack[stack.length-1]){
                    stack.push(maxTime)
                }
            }
        }
        return stack.length
    }
}
