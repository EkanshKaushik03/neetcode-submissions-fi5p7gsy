class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let i=0; i<tokens.length;i++){
            let v1
            let v2
            switch(tokens[i]){
                case "-":
                    v1 = stack.pop();
                    v2 = stack.pop();
                    v2 = v2 - v1
                    stack.push(v2);
                    break;
                case "+":
                    v1 = stack.pop() + stack.pop();
                    stack.push(v1);
                    break;
                case "*":
                    v1 = stack.pop() * stack.pop();
                    stack.push(v1);
                    break;
                case "/":
                    v1 = stack.pop();
                    v2 = stack.pop();
                    v2 = Math.trunc(v2 / v1);
                    stack.push(v2);
                    break;
                default:
                    stack.push(Number(tokens[i]))            
            }   
        }
        return stack.pop();
    }
}
