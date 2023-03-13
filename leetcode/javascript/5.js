/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = s[0], temp, newString;
    let flag = 1;
    let i = 0, resultLength = 0;

    while(flag && i < s.length) {
        for(let j = i; j <= s.length; j++) {
            temp = s.slice(i, j)
            console.log(temp)
            newString = "";
            for (var k = temp.length - 1; k >= 0; k--) {
                newString += temp[k];
            }

            if(!(temp == newString)) {

            }
            else if((resultLength < temp.length) && (temp.length >= 2)) {
                result = temp
                resultLength = temp.length
                console.log("true")
            }
        }
        i++
    }
    return result
};



console.log(longestPalindrome("babad"))