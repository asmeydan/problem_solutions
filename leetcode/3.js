/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i, j;
  let flag = 1,
    result = 0;
  let includesLetter = [];

  if (s.length < 2) {
    return s.length;
  }

  for (i = 0; i < s.length; i++) {
    j = i;
    includesLetter = [];
    includesLetter.push(s[i]);
    flag = 1;

    while (flag && j + 1 < s.length) {
      includesLetter.map((e) => {
        if (e == s[j + 1]) {
          flag = 0;
        }
      });
      if (flag) {
        includesLetter.push(s[j + 1]);
      }
      if (result < includesLetter.length) {
        result = includesLetter.length;
      }
      j++;
    }
  }
  return result;
};

console.log(lengthOfLongestSubstring("pwwkew"));
