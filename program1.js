/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
 
    const stack = [];
    
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (char === ')') {
                if (stack.length === 0 || stack.pop() !== '(') {
                    return false;
                }
            } else if (char === '}') {
                if (stack.length === 0 || stack.pop() !== '{') {
                    return false;
                }
            } else if (char === ']') {
                if (stack.length === 0 || stack.pop() !== '[') {
                    return false;
                }
            }
        }
    }
    
    return stack.length === 0;
}

module.exports = { isValid };
