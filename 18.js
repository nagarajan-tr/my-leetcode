// 18. 4 sum
let nums = [1, 0, -1, 0, -2, 2];
let target = 0;

function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    // console.log("nums: " + nums);   // -2,-1,0,0,1,2
    if (nums.length < 4) return [];
    if (nums[0] > target || nums[nums.length - 1] < target) return [];

    let result = [];

    for (let i = 0; i < nums.length - 3; i++) {
        if(i > 0 && nums[i] === nums[i - 1]){
            continue; // Skip duplicates for the first number
        }

        for(let j = i + 1; j < nums.length - 2; j++){
            if( j > i + 1 && nums[j] === nums[j - 1]){
                continue; // Skip duplicates for the second number
            }

            let left = j + 1;
            let right = nums.length - 1;

            while ( left  < right){
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                if(sum === target){
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    while(nums[left] === nums[left + 1]){
                        left++; // Skip duplicates for the third number
                    }
                    while(nums[right] === nums[right - 1]){
                        right--; // Skip duplicates for the fourth number
                    }
                    left++;
                    right--;
                } else if(sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;

}




console.log(fourSum(nums, target));