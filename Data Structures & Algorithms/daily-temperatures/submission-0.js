class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];

        for(let i=0; i<temperatures.length; i++){
            for(let j=i; j<temperatures.length; j++){
                if(temperatures[i] < temperatures[j]){
                    stack.push(j - i)
                    break;
                }
                if(j === temperatures.length - 1){
                    stack.push(0)
                }
            }
        }
        return stack;
    }
}
