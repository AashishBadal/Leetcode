var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length, n = nums2.length;
    
    // Ensure nums1 is the smaller array
    if (m > n) {
        [nums1, nums2] = [nums2, nums1];
        [m, n] = [n, m];
    }
    
    let low = 0, high = m;
    
    while (low <= high) {
        let i = Math.floor((low + high) / 2);
        let j = Math.floor((m + n + 1) / 2) - i;
        
        let maxLeft1 = (i === 0) ? -Infinity : nums1[i - 1];
        let minRight1 = (i === m) ? Infinity : nums1[i];
        
        let maxLeft2 = (j === 0) ? -Infinity : nums2[j - 1];
        let minRight2 = (j === n) ? Infinity : nums2[j];
        
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2.0;
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            high = i - 1;
        } else {
            low = i + 1;
        }
    }
};
