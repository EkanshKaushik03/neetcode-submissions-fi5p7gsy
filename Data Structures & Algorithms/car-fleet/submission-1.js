class Solution {
    carFleet(target, position, speed) {
        let cars = position.map((pos, i) => [pos, speed[i]]);
        cars.sort((a, b) => b[0] - a[0]);

        let stack = [];

        for (let [pos, spd] of cars) {
            let currTime = (target - pos) / spd;

            if (
                stack.length === 0 ||
                currTime > stack[stack.length - 1]
            ) {
                stack.push(currTime);
            }
        }

        return stack.length;
    }
}