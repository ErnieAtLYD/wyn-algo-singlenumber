/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
  let hash = {};
  for (let i = nums.length - 1; i >= 0; i--) {
    if (hash[nums[i]]) {
      return true;
    } else {
      hash[nums[i]] = 1;
    }
  }
  return false;
};

module.exports = containsDuplicate;

/**
 * [1,2,3,1]
 *
 * checks for hash[1]. (right now it's {})
 * { 1: 1 }
 *
 * next iteration
 * checks for hash[3]. (right now, it's {1:1})
 * doesn't exist, 
 * hash becomes { 1:1, 3:1 }
 *
 * next iteration
 * check for hash[2]. (hash is {1:1, 3:1})
 * doesn't exist
 * hash becomes { 1:1, 3:1, 2:1 }
 *
 * next iteration
 * checks for hash[1] - hash is { 1:1, 3:1, 2:1 }
 * hash[1] is 1 and not undefined.
 * so it hits line 11, and the function returns TRUE.
 */