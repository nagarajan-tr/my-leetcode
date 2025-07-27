// Search Insert position

function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target ){
            return mid; // Target found, return the index
        } else if(nums[mid] < target){
            left = mid + 1; // Target is in the right half
        } else {
            right = mid - 1; // Target is in the left half
        }
    }

    // If the target is not found, return the index where it would be inserted
    return left; // left is the insertion point
}

console.log(searchInsert([1,3,5,6], 5)); // 2