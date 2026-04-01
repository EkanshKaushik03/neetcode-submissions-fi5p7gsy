class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let r = heights.length -1;
        let l = 0;
        let maxWater = heights[l] < heights[r] ? heights[l] * (r-l) : heights[r] * (r-l) //initial water of l and r
        while(l<r){
            if(heights[l] > heights[r]){ // check whichever is lesser
                if(heights[r] * (r-l) > maxWater){ //since r is less check if the water it can contain is greater than maxWater if so update it
                    maxWater = heights[r] * (r-l)
            }
                r-- //since r is less than l, move it to the left to find bigger height
            }
            else {
                if(heights[l] * (r-l) > maxWater){
                maxWater = heights[l] * (r-l)
            }
                l++
            }
        }
        return maxWater;
    }
}
