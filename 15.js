let nums = [-1,0,1,2,-1,-4];


function threeSum(nums){
    nums.sort((a, b) => a - b);  //sort => -4,-1,-1,0,1,2
    if(nums.length < 3) return [];

    let result = [];
    for(let i = 0; i < nums.length - 1; i++){
        
        if(i > 0 && nums[i] === nums[i - 1]){
            continue;
            // console.log("i: "+i + " nums[i]: "+nums[i]);
        }
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right){    
            let sum = nums[i] + nums[left] + nums[right];
            if(sum === 0){
                result.push([nums[i], nums[left], nums[right]]);
                while(nums[left] === nums[left + 1]){ 
                    left++;
                }
                while(nums[right] === nums[right - 1]){
                    right--;
                }
                left++;
                right--;
            }else if(sum < 0){
                left++;
            }else{
                right--;
            }
        }
    }
    return result;
}
console.log(threeSum(nums));