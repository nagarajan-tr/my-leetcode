var moveZeroes = function(nums) {
    if(nums.length == 1) return;
    nums.sort((a,b) => a - b);
    let zeroCount = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            zeroCount++;
        } else if(zeroCount > 0) {
            nums[i - zeroCount] = nums[i];
            nums[i] = 0;
        }
    }

    return nums;
};

console.log(moveZeroes([0,1,0,3,12])); // Expected output: [1,3,12,0,0]