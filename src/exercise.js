/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  const result = 0;
  for (const i = 0; i < nums.length; i++) {
    result ^= nums[i];

    /**
     * in binary
     * 1 -   1
     * 2 -  10
     * 3 -  11
     * 4 - 100
     * 5 - 101
     *
     * XOR -- (negative of an OR)
     * 5 XOR 5 - the operator for a XOR is ^
     *   5 - 101
     *   5 - 101
     *       ---
     *       000
     *
     *   3 - 011
     *   1 - 001
     *       ---
     *        10 -> 2
     */
  }
  return result;
};

// module.exports = singleNumber;

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
