/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    var charArr = ["(", "[", "{", ")", "]", "}"];
    var len = s.length;
    
    for(var i = 0; i < len; i++) {
        for(var j = 0; j < 6; j++) {
            if(j < 3) {
                if(s[i] === charArr[j]) {
                    stack.push(charArr[j+3]);  // 左括号相对应的右括号入栈
                    break;
                }
            }
            else {
                if(stack.length === 0) {  // 栈为空时遇到右括号
                    return false;
                }
                else if(stack[stack.length-1] === s[i]) {  // 括号匹配，出栈
                    stack.pop();
                    break;
                }
            }
        }
        
        if(j === 6) {  // 左右括号不匹配
            break;
        }
    }
    
    if(stack.length === 0) {  // 栈为空
        return true;
    }
    else {
        return false;
    }
};