/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversedX = x.toString().split("").reverse().join("")

    if(x == reversedX) {
        return true
    }
    return false
};