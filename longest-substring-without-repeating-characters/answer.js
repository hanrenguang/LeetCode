/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	let len = s.length;
	let hash = {};
	let maxLen = 0;

	for (let i = 0, j = 0; i < len; i++) {
		if (typeof hash[s[i]] != 'undefined') {
			j = Math.max(j, hash[s[i]] + 1);
		}

		hash[s[i]] = i;
		maxLen = Math.max(maxLen, i - j + 1);
	}

	return maxLen;
};