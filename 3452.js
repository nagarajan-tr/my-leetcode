// Sum of Good Numbers 
// The good numbers are nums[1] = 3, nums[4] = 5, and nums[5] = 4 because they are strictly greater than the numbers at indices i - k and i + k.

function sumOfGoodNumbers(nums, k){
    let goodPair = []
    let n = nums.length

    for(let i = 0; i < n; i++){
        if(i - k >= 0 && i + k < n){
            if(nums[i] > nums[i - k] && nums[i] > nums[i + k]){
                goodPair.push(nums[i])
            }
        }else if(i - k >= 0){
            if(nums[i] > nums[i - k]){
                goodPair.push(nums[i])
            }
        }else if(i + k < n){
            if(nums[i] > nums[i + k]){
                goodPair.push(nums[i])
            }
        }else {
            // Neither index exists
            goodPair.push(nums[i])
        }
    }

    return goodPair.reduce((acc, val) => acc + val, 0)
}

const nums = [1,3,2,1,5,4];
const k = 2;
const result = sumOfGoodNumbers(nums, k);
console.log(result); // Output: 12
