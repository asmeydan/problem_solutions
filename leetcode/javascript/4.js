/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = [];
    let i, result;
    let index1 = 0, index2 = 0;

    for(i = 0; i < (nums1.length + nums2.length); i++) {
        if((nums1[index1] == nums2[index2])) {
            mergedArray.push(nums2[index2])
            index2++
        }
        else if(((nums1[index1] < nums2[index2]) || (nums2[index2] === undefined)) && !(nums1[index1] === undefined)) {
            mergedArray.push(nums1[index1])
            index1++
        }
        else {
            mergedArray.push(nums2[index2])
            index2++
        }
    }
    if((nums1.length + nums2.length) % 2 == 1) {
        result = mergedArray[(nums1.length + nums2.length - 1) / 2]
    }
    else {
        result = (mergedArray[(nums1.length + nums2.length) / 2] + mergedArray[(nums1.length + nums2.length) / 2 - 1]) / 2
    }
    return result
};