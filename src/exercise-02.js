/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  let hashTable = {};
  // our strategy:
  // iterate through that array
  // - map each value inside that array.
  //   if it doesn't exist yet, set the value to false.
  //   if it DOES exist, map it to true.

  // example: [1, 3, 5, 7, 10, 1, 3, 5, 7]
  /**
   * Pass 1:
   * {
   *    1: true
   *    3: true
   *    5: true
   *    7: true
   *    10: false
   * }
   */
  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i], hashTable[nums[i]]);

    // if (hashTable[nums[i]])

    // if hashTable[nums[i] is not inside the hashtable, set the value to false
    if (typeof hashTable[nums[i]] === "undefined") {
      hashTable[nums[i]] = false;
    } else {
      // if it IS inside the hashtable and it's false, set the value to true
      if (hashTable[nums[i]] === false) {
        hashTable[nums[i]] = true;
      }
    }
  }
  console.log(hashTable);
  // From there, go through all the keys in that object (hash table)
  // - and then return the one that is false!
  for (let key in hashTable) {
    // console.log("the key is " + key);
    if (hashTable[key] === false) {
      return key;
    }
  }
};

// module.exports = singleNumber;
[1, 1, 2];

console.log(singleNumber([1, 3, 5, 7, 10, 1, 3, 5, 7]));

/**
 *    * {
 *    1: 1
 *    3: 1
 *    5: 1
 *    7: 1
 *    10: 2
 * }
 */
