var lengthOfLongestSubstring = function (s) {
  let count = 0;
  let uniqArray = [];
  for (let i = 0; i < s.length; i++) {
    const removeCount = uniqArray.indexOf(s[i]);
    if (removeCount > -1) {
      if (count < uniqArray.length) {
        count = uniqArray.length;
      }
      uniqArray.splice(0, removeCount+1);

    }
    uniqArray.push(s[i]);
  }
  if (count < uniqArray.length) {
    count = uniqArray.length;
  }
  return count;
};

console.log('len :>> ', lengthOfLongestSubstring('dvdf'));
