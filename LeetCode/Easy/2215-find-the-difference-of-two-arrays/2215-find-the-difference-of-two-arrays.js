/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {

    const nums1Set = new Set(nums1);
    const nums2Set = new Set(nums2);

    const onlyNums1 = Array.from(nums1Set).filter((num) => !nums2Set.has(num));
    const onlyNums2 = Array.from(nums2Set).filter((num) => !nums1Set.has(num));


    return [onlyNums1,onlyNums2]
};
