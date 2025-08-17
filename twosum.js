function twoSum(nums, target) {
    const map = new Map(); // stores number → index

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i]; // return indices
        }
        
        map.set(nums[i], i); // store current number with its index
    }
}